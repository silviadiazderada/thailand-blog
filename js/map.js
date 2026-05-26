/* =============================================================
   INTERACTIVE MAP  —  Leaflet.js + animated travel markers
   ============================================================= */

let map, vehicleMarker, vehicleIcon;
let locationMarkers = {};
let travelLines     = [];
let currentDayIdx   = 0;
let animating       = false;

// ── Marker icon factories ────────────────────────────────────

function makeLocationIcon(label, isCurrent) {
  return L.divIcon({
    html: `<div class="custom-marker location${isCurrent ? ' current' : ''}">
             <span style="font-size:10px;font-weight:700">${label}</span>
           </div>`,
    className: '',
    iconSize:   [36, 36],
    iconAnchor: [18, 18],
    popupAnchor:[0, -20]
  });
}

function makeVehicleIcon(mode, bearing) {
  const emoji = mode === 'plane' ? '✈' : '🚗';
  return L.divIcon({
    html: `<div class="custom-marker vehicle" style="transform:rotate(${bearing}deg)">${emoji}</div>`,
    className: '',
    iconSize:   [36, 36],
    iconAnchor: [18, 18]
  });
}

// ── Math helpers ─────────────────────────────────────────────

function bearing(from, to) {
  const dLat = to[0] - from[0];
  const dLng = to[1] - from[1];
  return Math.atan2(dLng, dLat) * (180 / Math.PI);
}

// Quadratic Bézier for curved flight paths
function bezierPath(from, to, steps = 60) {
  const midLat = (from[0] + to[0]) / 2;
  const midLng = (from[1] + to[1]) / 2;
  const dist   = Math.hypot(to[0] - from[0], to[1] - from[1]);

  // Perpendicular control point (bows the path to the right)
  const perpLat = -(to[1] - from[1]) * 0.28;
  const perpLng =  (to[0] - from[0]) * 0.28;
  const ctrl    = [midLat + perpLat, midLng + perpLng];

  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t  = i / steps;
    const u  = 1 - t;
    pts.push([
      u * u * from[0] + 2 * u * t * ctrl[0] + t * t * to[0],
      u * u * from[1] + 2 * u * t * ctrl[1] + t * t * to[1]
    ]);
  }
  return pts;
}

// Straight line interpolation for car travel
function straightPath(from, to, steps = 40) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    pts.push([
      from[0] + (to[0] - from[0]) * t,
      from[1] + (to[1] - from[1]) * t
    ]);
  }
  return pts;
}

// ── Map init ─────────────────────────────────────────────────

function initMap() {
  map = L.map('map', {
    center:          [16.5, 100.5],
    zoom:            6,
    zoomControl:     true,
    attributionControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  // Draw a faint dashed line for the full route
  const routeCoords = [
    LOC.bangkok.coords,
    LOC.chiangRai.coords,
    LOC.waweeValley.coords,
    LOC.chiangMai.coords,
    LOC.bangkok.coords
  ];
  L.polyline(routeCoords, {
    color: '#C4873A', opacity: 0.15, weight: 1.5, dashArray: '6 4'
  }).addTo(map);

  // Place permanent location pins for all visited cities
  Object.values(LOC).forEach(loc => {
    const shortName = loc.name.split(' ')[0];
    const marker = L.marker(loc.coords, { icon: makeLocationIcon(shortName, false) })
      .addTo(map)
      .bindPopup(`<div class="popup-title">${loc.name}</div>`);
    locationMarkers[loc.name] = marker;
  });

  // Show first day immediately
  goToDay(0, false);
}

// ── Day transition ────────────────────────────────────────────

function goToDay(idx, animate) {
  if (animating) return;
  const day  = DAYS[idx];
  const prev = DAYS[currentDayIdx];
  currentDayIdx = idx;

  // Update all location markers to normal style
  Object.values(LOC).forEach(loc => {
    locationMarkers[loc.name]?.setIcon(makeLocationIcon(loc.name.split(' ')[0], false));
  });

  // Highlight current
  locationMarkers[day.location.name]?.setIcon(
    makeLocationIcon(day.location.name.split(' ')[0], true)
  );

  // Update badge
  const badge = document.getElementById('transport-badge');
  if (badge) badge.classList.remove('show');

  if (animate && day.travel) {
    const { from, to, mode } = day.travel;
    showTransportBadge(from.name, to.name, mode);
    animateTravel(from.coords, to.coords, mode, () => {
      map.flyTo(to.coords, getZoom(to), { duration: 1.2 });
    });
  } else {
    // Remove old vehicle marker
    if (vehicleMarker) { vehicleMarker.remove(); vehicleMarker = null; }
    // Zoom to current location (different zoom for Bangkok vs north)
    map.flyTo(day.location.coords, getZoom(day.location), { duration: 1.2 });
  }

  // Draw cumulative travel lines up to this day
  drawCumulativeLines(idx);
}

function getZoom(loc) {
  if (loc.name === 'Bangkok') return 11;
  if (loc.name === 'Chiang Rai') return 12;
  if (loc.name === 'Wawee Valley') return 12;
  if (loc.name === 'Chiang Mai') return 12;
  return 10;
}

// ── Cumulative route lines ───────────────────────────────────

function drawCumulativeLines(upToIdx) {
  travelLines.forEach(l => l.remove());
  travelLines = [];

  for (let i = 0; i <= upToIdx; i++) {
    const d = DAYS[i];
    if (!d.travel) continue;

    const { from, to, mode } = d.travel;
    const pts = mode === 'plane'
      ? bezierPath(from.coords, to.coords)
      : straightPath(from.coords, to.coords);

    const line = L.polyline(pts, {
      color:     mode === 'plane' ? '#C4873A' : '#2D5016',
      weight:    mode === 'plane' ? 2         : 2.5,
      opacity:   0.65,
      dashArray: mode === 'plane' ? '6 4'     : null
    }).addTo(map);

    travelLines.push(line);
  }
}

// ── Travel animation ─────────────────────────────────────────

function animateTravel(fromCoords, toCoords, mode, onComplete) {
  animating = true;
  if (vehicleMarker) { vehicleMarker.remove(); vehicleMarker = null; }

  const pts  = mode === 'plane'
    ? bezierPath(fromCoords, toCoords)
    : straightPath(fromCoords, toCoords);

  const initialBearing = bearing(fromCoords, toCoords);
  vehicleMarker = L.marker(fromCoords, {
    icon:      makeVehicleIcon(mode, initialBearing),
    zIndexOffset: 1000
  }).addTo(map);

  // Adjust map bounds to show full journey
  const bounds = L.latLngBounds(pts);
  map.flyToBounds(bounds.pad(0.25), { duration: 0.8 });

  let step = 0;
  const totalSteps = pts.length;
  // Speed: ~12 ms per step for plane (longer), 18 ms for car
  const interval = mode === 'plane' ? 35 : 50;

  function tick() {
    if (!animating) return;
    if (step >= totalSteps - 1) {
      vehicleMarker.setLatLng(toCoords);
      animating = false;
      if (onComplete) onComplete();
      return;
    }

    vehicleMarker.setLatLng(pts[step]);

    // Update icon bearing every 5 steps
    if (step % 5 === 0 && step + 1 < totalSteps) {
      const b = bearing(pts[step], pts[Math.min(step + 5, totalSteps - 1)]);
      vehicleMarker.setIcon(makeVehicleIcon(mode, b));
    }

    step++;
    setTimeout(tick, interval);
  }

  tick();
}

// ── Badge ────────────────────────────────────────────────────

function showTransportBadge(from, to, mode) {
  const badge = document.getElementById('transport-badge');
  if (!badge) return;
  const icon = mode === 'plane' ? '✈️' : '🚗';
  badge.innerHTML = `${icon} ${from} → ${to}`;
  badge.classList.add('show');
}

// ── Public API ───────────────────────────────────────────────
// Called from main.js when day tab is clicked
function selectDay(idx) {
  const fromIdx = currentDayIdx;
  const animate = (idx !== fromIdx) && !!DAYS[idx].travel;
  goToDay(idx, animate);
}
