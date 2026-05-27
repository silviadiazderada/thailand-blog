/* =============================================================
   INTERACTIVE MAP  —  Leaflet.js + animated travel markers
   ============================================================= */

let map, vehicleMarker;
let locationMarkers = {};
let travelLines     = [];
let currentDayIdx   = 0;
let animating       = false;

// Short labels for each city pin
const PIN_LABEL = {
  'Bangkok':      'BKK',
  'Chiang Rai':   'CR',
  'Wawee Valley': 'WV',
  'Chiang Mai':   'CM'
};

// ── Marker icon factories ────────────────────────────────────

function makeLocationIcon(name, isCurrent) {
  const abbr  = PIN_LABEL[name] || name.slice(0, 3).toUpperCase();
  const bg    = isCurrent ? '#C4873A' : '#4E7B5F';
  const pulse = isCurrent ? ' map-pin-current' : '';

  return L.divIcon({
    html: `
      <div style="display:flex;flex-direction:column;align-items:center">
        <div class="map-pin-inner${pulse}" style="
          width:40px;height:40px;border-radius:50%;
          background:${bg};color:white;
          font-family:Lato,sans-serif;font-size:10px;font-weight:900;letter-spacing:.06em;
          display:flex;align-items:center;justify-content:center;
          border:3px solid white;
          position:relative;
        ">
          ${abbr}
          <span style="
            position:absolute;top:100%;left:50%;transform:translateX(-50%);
            width:0;height:0;
            border-left:8px solid transparent;border-right:8px solid transparent;
            border-top:12px solid white;
          "></span>
          <span style="
            position:absolute;top:calc(100% + 2px);left:50%;transform:translateX(-50%);
            width:0;height:0;
            border-left:6px solid transparent;border-right:6px solid transparent;
            border-top:10px solid ${bg};
          "></span>
        </div>
      </div>`,
    className: '',
    iconSize:   [40, 54],
    iconAnchor: [20, 54],
    popupAnchor:[0, -56]
  });
}

function makeVehicleIcon(mode) {
  const emoji = mode === 'plane' ? '✈️' : '🚗';
  const color = mode === 'plane' ? '#C4873A' : '#4E7B5F';
  return L.divIcon({
    html: `
      <div style="
        width:46px;height:46px;border-radius:50%;
        background:white;
        border:3px solid ${color};
        box-shadow:0 4px 16px rgba(0,0,0,.3),0 0 0 4px ${color}28;
        display:flex;align-items:center;justify-content:center;
        font-size:20px;
      ">${emoji}</div>`,
    className: '',
    iconSize:   [46, 46],
    iconAnchor: [23, 23]
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
  const perpLat = -(to[1] - from[1]) * 0.28;
  const perpLng =  (to[0] - from[0]) * 0.28;
  const ctrl    = [midLat + perpLat, midLng + perpLng];
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps, u = 1 - t;
    pts.push([
      u*u*from[0] + 2*u*t*ctrl[0] + t*t*to[0],
      u*u*from[1] + 2*u*t*ctrl[1] + t*t*to[1]
    ]);
  }
  return pts;
}

// Straight interpolation for car travel
function straightPath(from, to, steps = 40) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    pts.push([from[0] + (to[0]-from[0])*t, from[1] + (to[1]-from[1])*t]);
  }
  return pts;
}

// ── Map init ─────────────────────────────────────────────────

function initMap() {
  map = L.map('map', {
    center:             [16.5, 100.5],
    zoom:               6,
    zoomControl:        true,
    attributionControl: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>',
    maxZoom:      19,
    detectRetina: true
  }).addTo(map);

  // Faint dashed overview line for the full route
  L.polyline([
    LOC.bangkok.coords,
    LOC.chiangRai.coords,
    LOC.waweeValley.coords,
    LOC.chiangMai.coords,
    LOC.bangkok.coords
  ], { color: '#C4873A', opacity: 0.12, weight: 2, dashArray: '6 5' }).addTo(map);

  // Place permanent city pins
  Object.values(LOC).forEach(loc => {
    const marker = L.marker(loc.coords, { icon: makeLocationIcon(loc.name, false) })
      .addTo(map)
      .bindPopup(`<div class="popup-title">${loc.name}</div>`);
    locationMarkers[loc.name] = marker;
  });

  goToDay(0, false);
}

// ── Day transition ────────────────────────────────────────────

function goToDay(idx, animate) {
  if (animating) return;
  const day = DAYS[idx];
  currentDayIdx = idx;

  Object.values(LOC).forEach(loc => {
    locationMarkers[loc.name]?.setIcon(makeLocationIcon(loc.name, false));
  });
  locationMarkers[day.location.name]?.setIcon(makeLocationIcon(day.location.name, true));

  const badge = document.getElementById('transport-badge');
  if (badge) badge.classList.remove('show');

  if (animate && day.travel) {
    const { from, to, mode } = day.travel;
    showTransportBadge(from.name, to.name, mode);
    animateTravel(from.coords, to.coords, mode, () => {
      map.flyTo(to.coords, getZoom(to), { duration: 1.2 });
    });
  } else {
    if (vehicleMarker) { vehicleMarker.remove(); vehicleMarker = null; }
    map.flyTo(day.location.coords, getZoom(day.location), { duration: 1.2 });
  }

  drawCumulativeLines(idx);
}

function getZoom(loc) {
  if (loc.name === 'Bangkok')      return 11;
  if (loc.name === 'Chiang Rai')   return 12;
  if (loc.name === 'Wawee Valley') return 12;
  if (loc.name === 'Chiang Mai')   return 12;
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

    travelLines.push(L.polyline(pts, {
      color:     mode === 'plane' ? '#C4873A' : '#4E7B5F',
      weight:    mode === 'plane' ? 3         : 3.5,
      opacity:   0.8,
      dashArray: mode === 'plane' ? '8 5'     : null,
      lineCap:   'round',
      lineJoin:  'round'
    }).addTo(map));
  }
}

// ── Travel animation ─────────────────────────────────────────

function animateTravel(fromCoords, toCoords, mode, onComplete) {
  animating = true;
  if (vehicleMarker) { vehicleMarker.remove(); vehicleMarker = null; }

  const pts = mode === 'plane'
    ? bezierPath(fromCoords, toCoords)
    : straightPath(fromCoords, toCoords);

  vehicleMarker = L.marker(fromCoords, {
    icon: makeVehicleIcon(mode),
    zIndexOffset: 1000
  }).addTo(map);

  map.flyToBounds(L.latLngBounds(pts).pad(0.25), { duration: 0.8 });

  let step = 0;
  const totalSteps = pts.length;
  const interval   = mode === 'plane' ? 35 : 50;

  function tick() {
    if (!animating) return;
    if (step >= totalSteps - 1) {
      vehicleMarker.setLatLng(toCoords);
      animating = false;
      if (onComplete) onComplete();
      return;
    }
    vehicleMarker.setLatLng(pts[step]);
    step++;
    setTimeout(tick, interval);
  }
  tick();
}

// ── Badge ────────────────────────────────────────────────────

function showTransportBadge(from, to, mode) {
  const badge = document.getElementById('transport-badge');
  if (!badge) return;
  badge.innerHTML = `${mode === 'plane' ? '✈️' : '🚗'} ${from} → ${to}`;
  badge.classList.add('show');
}

// ── Public API ───────────────────────────────────────────────
function selectDay(idx) {
  const animate = (idx !== currentDayIdx) && !!DAYS[idx].travel;
  goToDay(idx, animate);
}
