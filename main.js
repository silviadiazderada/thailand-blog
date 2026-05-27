/* =============================================================
   MAIN.JS  —  Navigation, team cards, blog rendering
   ============================================================= */

// ── Mobile nav toggle ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }
});

// ── Render team cards (index.html) ───────────────────────────
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  TEAM.forEach(member => {
    const photoHTML = member.photo
      ? `<img src="${member.photo}" alt="${member.name}" loading="lazy">`
      : `<span class="initials">${member.initials}</span>`;

    grid.innerHTML += `
      <article class="team-card">
        <div class="team-photo">${photoHTML}</div>
        <div class="team-info">
          <div class="team-name">${member.name}</div>
          <div class="team-role">${member.role}</div>
          <p class="team-bio">${member.bio}</p>
        </div>
      </article>`;
  });
}

// ── Blog: build day tabs ──────────────────────────────────────
function buildTabs() {
  const bar = document.getElementById('day-tabs');
  if (!bar) return;

  DAYS.forEach((day, i) => {
    const hasTravel = day.travel?.mode === 'plane' ? ' ✈' : '';
    const btn = document.createElement('button');
    btn.className = `day-tab${i === 0 ? ' active' : ''}`;
    btn.setAttribute('data-idx', i);
    btn.innerHTML = `
      <span class="tab-day">Day ${day.day}</span>
      <span class="tab-loc">${day.location.name}${hasTravel}</span>`;
    btn.addEventListener('click', () => activateDay(i));
    bar.appendChild(btn);
  });

  // Scroll active tab into view on load
  scrollTabIntoView(0);
}

// ── Blog: activate a day ──────────────────────────────────────
let activeIdx = 0;

function activateDay(idx) {
  // Update tabs
  document.querySelectorAll('.day-tab').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });

  // Update map
  if (typeof selectDay === 'function') selectDay(idx);

  // Render content
  renderEntry(idx);
  scrollTabIntoView(idx);

  // Scroll content panel back to top
  const panel = document.querySelector('.content-panel');
  if (panel) panel.scrollTop = 0;

  activeIdx = idx;
}

function scrollTabIntoView(idx) {
  const btn = document.querySelector(`.day-tab[data-idx="${idx}"]`);
  if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// ── Blog: render entry content ────────────────────────────────
function renderEntry(idx) {
  const wrap = document.getElementById('entry-content');
  if (!wrap) return;

  const day = DAYS[idx];
  const travelInfo = day.travel
    ? `<span>
         ${day.travel.mode === 'plane' ? '✈️ Flew from' : '🚗 Drove from'}
         ${day.travel.from.name} to ${day.travel.to.name}
       </span>`
    : '';

  const isPlaceholder = day.content.includes('✏️');
  const placeholderNote = isPlaceholder
    ? `<div class="placeholder-note">
         <em>📝</em>
         <span>This entry is a placeholder. Replace the content in <code>js/data.js</code> under <strong>Day ${day.day}</strong>.</span>
       </div>`
    : '';

  const photosHTML = day.photos.length
    ? day.photos.map(p => `
        <div class="photo-slot has-photo">
          <img src="${p}" alt="Day ${day.day} photo" loading="lazy">
        </div>`).join('')
    : `<div class="photo-slot">Add photos in<br>js/data.js → photos[]</div>
       <div class="photo-slot" style="opacity:.5"></div>
       <div class="photo-slot" style="opacity:.25"></div>`;

  wrap.innerHTML = `
    <div class="entry-wrap">
      <header class="entry-header">
        <div class="entry-eyebrow">
          <span>Day ${day.day}</span>
          <span>·</span>
          <span>${day.date}</span>
        </div>
        <h1 class="entry-title">${day.title}</h1>
        <div class="entry-meta">
          <span>📍 ${day.location.name}</span>
          ${travelInfo}
        </div>
      </header>

      ${placeholderNote}

      <div class="entry-body">${day.content}</div>

      <div>
        <p class="section-label" style="margin-bottom:.75rem">Photos</p>
        <div class="photo-grid">${photosHTML}</div>
      </div>

      <div class="nav-arrows" role="navigation" aria-label="Day navigation">
        <button class="nav-arrow-btn" onclick="activateDay(${idx - 1})" ${idx === 0 ? 'disabled' : ''}>
          ← Day ${idx > 0 ? DAYS[idx-1].day : '—'}
        </button>
        <span style="color:var(--text-light);font-size:.8rem">Day ${day.day} of ${DAYS.length}</span>
        <button class="nav-arrow-btn" onclick="activateDay(${idx + 1})" ${idx === DAYS.length - 1 ? 'disabled' : ''}>
          Day ${idx < DAYS.length - 1 ? DAYS[idx+1].day : '—'} →
        </button>
      </div>
    </div>`;
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTeam();
  buildTabs();
  renderEntry(0);

  if (typeof initMap === 'function') {
    initMap();
  }

  // Mark active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (path.includes('blog') && a.getAttribute('href')?.includes('blog')) {
      a.classList.add('active');
    } else if (!path.includes('blog') && (a.getAttribute('href') === 'index.html' || a.getAttribute('href') === './')) {
      a.classList.add('active');
    }
  });
});
