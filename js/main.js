/* ============================================================
   MAIN JAVASCRIPT
   js/main.js
   ============================================================ */

/* --- Publications renderer -------------------------------- */
// renderPublications(filter) is called from the filter buttons in publications.html.
// To change which papers appear on the homepage, set  featured: true  in data/publications.js.
function renderPublications(filter) {
  const container = document.getElementById('pub-list');
  if (!container || typeof PUBLICATIONS === 'undefined') return;

  const activeFilter = filter || 'all';

  // Update filter button states
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === activeFilter);
  });

  let pubs = PUBLICATIONS.slice().sort((a, b) => b.year - a.year);
  if (activeFilter !== 'all') pubs = pubs.filter(p => p.type === activeFilter);

  // Update count pill
  const countEl = document.querySelector('.pub-count');
  if (countEl) countEl.textContent = `${pubs.length} publication${pubs.length !== 1 ? 's' : ''}`;

  // Group by year
  const byYear = {};
  pubs.forEach(p => {
    if (!byYear[p.year]) byYear[p.year] = [];
    byYear[p.year].push(p);
  });

  const years = Object.keys(byYear).sort((a, b) => b - a);

  container.innerHTML = years.map(year => `
    <div class="pub-year-group">
      <div class="pub-year-label">${year}</div>
      <div class="pub-list">
        ${byYear[year].map(p => pubCard(p)).join('')}
      </div>
    </div>
  `).join('');
}

/* Build a single publication card matching the new CSS design */
function pubCard(p) {
  const venueStr = [p.venue, p.volume && `Vol. ${p.volume}`, p.pages].filter(Boolean).join(', ');
  const href = p.doi ? `https://doi.org/${p.doi}` : (p.url || null);

  const titleEl = href
    ? `<a href="${href}" target="_blank" rel="noopener">${p.title}</a>`
    : p.title;

  // Badges
  const typeCls   = p.type === 'journal' ? '' : p.type === 'conference' ? 'green' : 'blue';
  const typeBadge  = `<span class="pub-badge ${typeCls}">${p.type.toUpperCase()}</span>`;
  const awardBadge = p.award ? `<span class="pub-badge gold">🏆 ${p.award}</span>` : '';

  // DOI / link button
  const doiLink = p.doi
    ? `<a class="pub-link" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
         </svg>DOI
       </a>`
    : (p.url ? `<a class="pub-link" href="${p.url}" target="_blank" rel="noopener">LINK</a>` : '');

  return `
    <div class="pub-card">
      <div class="pub-title">${titleEl}</div>
      <div class="pub-authors">${p.authors}</div>
      <div class="pub-venue-str">${venueStr}</div>
      <div class="pub-meta">
        ${typeBadge}
        ${awardBadge}
        ${doiLink}
      </div>
    </div>`;
}

/* --- Featured publications on the homepage ---------------- */
function renderRecentPublications() {
  const container = document.getElementById('recent-pub-list');
  if (!container || typeof PUBLICATIONS === 'undefined') return;

  const featured = PUBLICATIONS
    .filter(p => p.featured)
    .sort((a, b) => b.year - a.year);

  container.innerHTML = featured.map(p => pubCard(p)).join('');
}

/* --- Projects renderer ------------------------------------ */
function renderProjects(containerId, activeOnly) {
  const container = document.getElementById(containerId);
  if (!container || typeof PROJECTS === 'undefined') return;

  let projects = PROJECTS;
  if (activeOnly) projects = projects.filter(p => p.active);

  container.innerHTML = projects.map(p => {
    const statusCls   = p.active ? 'active' : 'past';
    const statusLabel = p.active ? 'ACTIVE' : 'PAST';
    const acronymStr  = (p.acronym && p.acronym !== p.name) ? ` (${p.acronym})` : '';

    const roleParts = [
      p.role,
      p.funder ? `Funded by ${p.funder}` : '',
      p.dates  || ''
    ].filter(Boolean);

    const tagsHtml = (p.tags || [])
      .map(t => `<span class="project-tag">${t}</span>`)
      .join('');

    const linkHtml = p.url
      ? `<a class="project-link-small" href="${p.url}" target="_blank" rel="noopener">Project page ↗</a>`
      : '';

    /* All projects use compact small cards */
    return `
      <div class="project-card project-card-sm">
        <div class="project-card-top">
          <h3>${p.name}${acronymStr}</h3>
          <span class="project-status ${statusCls}">${statusLabel}</span>
        </div>
        <div class="project-role-line">${roleParts.join(' · ')}</div>
        <div class="project-tags">${tagsHtml}</div>
        ${linkHtml}
      </div>`;
  }).join('');
}

/* --- Init on DOM ready ------------------------------------ */
document.addEventListener('DOMContentLoaded', function () {
  // Close mobile nav when a link is tapped
  const navLinks = document.getElementById('nav-links');
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // Render dynamic sections (functions are no-ops when container is absent)
  renderRecentPublications();
  renderProjects('project-grid-home', false); // homepage: all projects
  renderProjects('project-grid-all',  false); // research page: all projects
  renderPublications('all');                   // publications page: all pubs
});
