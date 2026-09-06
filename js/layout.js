/**
 * Layout injection — Navbar, Footer, Breadcrumbs
 */
(function () {
  'use strict';

  function getBasePath() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    if (path.includes('/services/') || path.includes('/projects/') || path.includes('/team/')) {
      return '../';
    }
    return '';
  }

  function renderNavbar(base) {
    const servicesMenu = SERVICES.map(s => `
      <a href="${base}${s.href.replace(/^\//, '')}">
        <span class="num">${s.number}</span>
        <span class="title">${s.title}</span>
      </a>
    `).join('');

    const mobileServices = SERVICES.map(s => `
      <a href="${base}${s.href.replace(/^\//, '')}">${s.number} ${s.title}</a>
    `).join('');

    const currentPath = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    const navItems = NAV.map(item => {
      const href = base + item.href.replace(/^\//, '');
      const itemPath = item.href.replace(/^\//, '').toLowerCase();
      let isActive = currentPath.endsWith(itemPath) ||
        (item.href === '/index.html' && (currentPath.endsWith('/') || currentPath.endsWith('/index.html') || currentPath.endsWith('subterra-dynamics')));
      if (item.mega && currentPath.includes('/services/')) isActive = true;
      
      if (item.mega) {
        return `
          <li class="nav-item has-dropdown">
            <a href="${href}" ${isActive ? 'class="active"' : ''} aria-haspopup="true" aria-expanded="false">
              ${item.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </a>
            <div class="mega-menu" role="menu">
              <div class="mega-menu-grid">${servicesMenu}</div>
            </div>
          </li>`;
      }
      return `<li class="nav-item"><a href="${href}" ${isActive ? 'class="active"' : ''}>${item.label}</a></li>`;
    }).join('');

    return `
      <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>
      <header class="navbar" id="navbar" role="banner">
        <div class="container navbar-inner">
          <a href="${base}index.html" class="logo" aria-label="${SITE.name} Home">
            <span class="logo-mark">S</span>
            <span>Subterra Dynamics</span>
          </a>
          <nav class="nav-links" aria-label="Main navigation">
            <ul style="display:flex;gap:2rem;align-items:center">${navItems}</ul>
          </nav>
          <div class="nav-cta">
            <a href="${base}contact.html" class="btn btn-primary">Contact Us</a>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
        <ul class="mobile-nav-links">
          <li><a href="${base}index.html">Home</a></li>
          <li><a href="${base}about.html">About</a></li>
          <li>
            <button class="mobile-toggle" id="mobileServicesToggle" aria-expanded="false">
              Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="mobile-submenu" id="mobileServicesMenu">${mobileServices}</div>
          </li>
          <li><a href="${base}projects.html">Projects</a></li>
          <li><a href="${base}team.html">Team</a></li>
          <li><a href="${base}contact.html">Contact</a></li>
        </ul>
        <div style="margin-top:2rem">
          <a href="${base}contact.html" class="btn btn-primary" style="width:100%;justify-content:center">Contact Us</a>
        </div>
      </div>`;
  }

  function renderFooter(base) {
    const serviceLinks = SERVICES.map(s =>
      `<li><a href="${base}${s.href.replace(/^\//, '')}">${s.shortTitle}</a></li>`
    ).join('');

    return `
      <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="${base}index.html" class="logo">
                <span class="logo-mark">S</span>
                <span>Subterra Dynamics</span>
              </a>
              <p>Subterra Dynamics Limited is an indigenous Nigerian company delivering value across Procurement, Consulting, IT, Construction, HR, Renewable Energy, Agricultural Export, and Mining.</p>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="${base}index.html">Home</a></li>
                <li><a href="${base}about.html">About</a></li>
                <li><a href="${base}team.html">Team</a></li>
                <li><a href="${base}projects.html">Projects</a></li>
                <li><a href="${base}contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Services</h4>
              <ul>${serviceLinks}</ul>
            </div>
            <div class="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
                ${SITE.phones.map(p => `<li><a href="tel:${p.replace(/\s/g,'')}">${p}</a></li>`).join('')}
                <li>${SITE.address}</li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>${SITE.tagline}</p>
            <p>${SITE.copyright}</p>
          </div>
        </div>
      </footer>
      <button class="back-to-top" id="backToTop" aria-label="Back to top">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>`;
  }

  function renderBreadcrumbs(items) {
    if (!items || !items.length) return '';
    const base = getBasePath();
    const crumbs = items.map((item, i) => {
      if (i === items.length - 1) return `<span>${item.label}</span>`;
      return `<a href="${base}${item.href.replace(/^\//, '')}">${item.label}</a><span>/</span>`;
    }).join('');
    return `<nav class="breadcrumbs" aria-label="Breadcrumb">${crumbs}</nav>`;
  }

  window.SDLayout = {
    getBasePath,
    renderNavbar,
    renderFooter,
    renderBreadcrumbs,
    init: function () {
      const base = getBasePath();
      const navSlot = document.getElementById('navbar-slot');
      const footerSlot = document.getElementById('footer-slot');
      const breadcrumbSlot = document.getElementById('breadcrumb-slot');

      if (navSlot) navSlot.innerHTML = renderNavbar(base);
      if (footerSlot) footerSlot.innerHTML = renderFooter(base);
      if (breadcrumbSlot && window.pageBreadcrumbs) {
        breadcrumbSlot.innerHTML = renderBreadcrumbs(window.pageBreadcrumbs);
      }
    }
  };

  document.addEventListener('DOMContentLoaded', () => SDLayout.init());
})();
