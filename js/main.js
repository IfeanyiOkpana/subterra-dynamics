/**
 * Main interactions — scroll, animations, mobile menu, counters
 */
(function () {
  'use strict';

  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const servicesToggle = document.getElementById('mobileServicesToggle');
    const servicesMenu = document.getElementById('mobileServicesMenu');

    if (!navbar) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      navbar.classList.toggle('scrolled', scrollY > 50);

      const progress = document.getElementById('scrollProgress');
      if (progress) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = docHeight > 0 ? `${(scrollY / docHeight) * 100}%` : '0%';
      }

      const backToTop = document.getElementById('backToTop');
      if (backToTop) backToTop.classList.toggle('visible', scrollY > 600);

      lastScroll = scrollY;
    }, { passive: true });

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        mobileMenu.setAttribute('aria-hidden', !isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    if (servicesToggle && servicesMenu) {
      servicesToggle.addEventListener('click', () => {
        const isOpen = servicesMenu.classList.toggle('open');
        servicesToggle.classList.toggle('open', isOpen);
        servicesToggle.setAttribute('aria-expanded', isOpen);
      });
    }

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function initReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el);
    });
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const animateCounter = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const start = performance.now();

      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        projectCards.forEach(card => {
          const cat = card.dataset.category;
          const show = filter === 'all' || cat === filter;
          card.classList.toggle('hidden', !show);
          if (show) {
            card.style.animation = 'none';
            card.offsetHeight;
            card.style.animation = '';
          }
        });
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('[type="submit"]');
      const messageEl = document.getElementById('formMessage');
      let valid = true;

      form.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));
      form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

      const fields = {
        fullName: { required: true, min: 2 },
        email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        phone: { required: true, min: 7 },
        message: { required: true, min: 10 }
      };

      Object.entries(fields).forEach(([name, rules]) => {
        const input = form.elements[name];
        const errorEl = document.getElementById(`${name}Error`);
        if (!input) return;

        if (rules.required && !input.value.trim()) {
          valid = false;
          input.classList.add('error');
          if (errorEl) { errorEl.textContent = 'This field is required.'; errorEl.classList.add('visible'); }
        } else if (rules.pattern && !rules.pattern.test(input.value)) {
          valid = false;
          input.classList.add('error');
          if (errorEl) { errorEl.textContent = 'Please enter a valid email address.'; errorEl.classList.add('visible'); }
        } else if (rules.min && input.value.trim().length < rules.min) {
          valid = false;
          input.classList.add('error');
          if (errorEl) { errorEl.textContent = `Minimum ${rules.min} characters required.`; errorEl.classList.add('visible'); }
        }
      });

      if (!valid) {
        if (messageEl) {
          messageEl.className = 'form-message error';
          messageEl.textContent = 'Please correct the errors above.';
        }
        return;
      }

      submitBtn.classList.add('loading');
      submitBtn.textContent = 'Sending...';

      await new Promise(r => setTimeout(r, 1500));

      submitBtn.classList.remove('loading');
      submitBtn.innerHTML = 'Send Message <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
      form.reset();

      if (messageEl) {
        messageEl.className = 'form-message success';
        messageEl.textContent = 'Thank you for your message. We will get back to you shortly.';
      }
    });
  }

  function renderDynamicGrids() {
    const base = SDLayout.getBasePath();

    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
      servicesGrid.innerHTML = SERVICES.map(s => `
        <a href="${base}${s.href.replace(/^\//, '')}" class="service-card reveal">
          <div class="service-card-image">
            <img src="${s.image}" alt="${s.title}" loading="lazy" width="600" height="400">
            <span class="service-card-number">${s.number}</span>
          </div>
          <div class="service-card-body">
            <h3>${s.title}</h3>
            <p>${s.description}</p>
            <div class="service-capabilities">
              ${s.capabilities.map(c => `<span>${c}</span>`).join('')}
            </div>
            <span class="btn-text">View Service <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </div>
        </a>
      `).join('');
    }

    const homeServicesGrid = document.getElementById('homeServicesGrid');
    if (homeServicesGrid) {
      homeServicesGrid.innerHTML = SERVICES.slice(0, 4).map(s => `
        <a href="${base}${s.href.replace(/^\//, '')}" class="service-card reveal">
          <div class="service-card-image">
            <img src="${s.image}" alt="${s.title}" loading="lazy" width="600" height="400">
            <span class="service-card-number">${s.number}</span>
          </div>
          <div class="service-card-body">
            <h3>${s.title}</h3>
            <p>${s.description.substring(0, 120)}...</p>
            <span class="btn-text">View Service <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </div>
        </a>
      `).join('');
    }

    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
      projectsGrid.innerHTML = PROJECTS.map(p => `
        <article class="project-card reveal" data-category="${p.categorySlug}">
          <div class="project-card-image">
            <img src="${p.image}" alt="${p.client} logo" loading="lazy">
          </div>
          <div class="project-card-body">
            <span class="project-category">${p.category}</span>
            <h3>${p.title}</h3>
            <p class="project-client">${p.client}</p>
            <a href="${base}projects/${p.id}.html" class="btn-text">View Project <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          </div>
        </article>
      `).join('');
    }

    const homeProjectsGrid = document.getElementById('homeProjectsGrid');
    if (homeProjectsGrid) {
      homeProjectsGrid.innerHTML = PROJECTS.slice(0, 3).map(p => `
        <article class="project-card reveal">
          <div class="project-card-image">
            <img src="${p.image}" alt="${p.client} logo" loading="lazy">
          </div>
          <div class="project-card-body">
            <span class="project-category">${p.category}</span>
            <h3>${p.title}</h3>
            <p class="project-client">${p.client}</p>
            <a href="${base}projects/${p.id}.html" class="btn-text">View Project <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          </div>
        </article>
      `).join('');
    }

    const teamGrid = document.getElementById('teamGrid');
    if (teamGrid) {
      teamGrid.innerHTML = TEAM.map(m => `
        <article class="team-card reveal">
          <div class="team-card-image">
            <img src="${m.image}" alt="${m.name}" loading="lazy">
          </div>
          <div class="team-card-body">
            <h3>${m.name}</h3>
            <p class="title">${m.title}</p>
            <a href="${base}team/${m.id}.html" class="btn-text">View Profile <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          </div>
        </article>
      `).join('');
    }

    const partnersTrack = document.getElementById('partnersTrack');
    if (partnersTrack) {
      const logos = PARTNERS.map(p => `
        <div class="partner-logo">
          <img src="${p.logo}" alt="${p.name}" loading="lazy">
        </div>
      `).join('');
      partnersTrack.innerHTML = logos + logos;
    }

    const projectFilters = document.getElementById('projectFilters');
    if (projectFilters) {
      projectFilters.innerHTML = PROJECT_FILTERS.map((f, i) => `
        <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${f.slug}">${f.label}</button>
      `).join('');
    }

    const serviceSelect = document.getElementById('serviceInterest');
    if (serviceSelect) {
      SERVICES.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.title;
        opt.textContent = s.title;
        serviceSelect.appendChild(opt);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderDynamicGrids();
    initNavbar();
    initReveal();
    initCounters();
    initProjectFilters();
    initContactForm();
  });
})();
