(function () {
  const LANG_KEY = 'rvilla-lang';
  const defaultLang = (navigator.language || '').toLowerCase().startsWith('fi') ? 'fi' : 'en';
  let lang = localStorage.getItem(LANG_KEY) || defaultLang;
  let navDirection = 0; // -1 = came from "previous", 1 = came from "next", 0 = no slide animation

  const THEME_KEY = 'rvilla-theme';
  // null/undefined = no explicit choice yet, follow the system's light/dark preference
  let theme = localStorage.getItem(THEME_KEY);
  const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const els = {
    root: document.documentElement,
    home: document.getElementById('home-view'),
    detail: document.getElementById('detail-view'),
    grid: document.getElementById('card-grid'),
    detailBody: document.getElementById('detail-body'),
    detailTitle: document.getElementById('detail-title'),
    detailIcon: document.getElementById('detail-icon'),
    detailPhoto: document.getElementById('detail-photo'),
    detailPhotoImg: document.getElementById('detail-photo-img'),
    detailContent: document.getElementById('detail-content'),
    backBtn: document.getElementById('back-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    langButtons: document.querySelectorAll('.lang-btn'),
    themeButtons: document.querySelectorAll('.theme-btn'),
    houseName: document.getElementById('house-name'),
    houseTagline: document.getElementById('house-tagline'),
    welcomeTitle: document.getElementById('welcome-title'),
    welcomeText: document.getElementById('welcome-text'),
    search: document.getElementById('search-input'),
    noResults: document.getElementById('no-results'),
    bannerImg: document.getElementById('banner-img'),
  };

  function t(field) {
    return HOUSE[lang][field];
  }

  function renderBlock(block) {
    switch (block.type) {
      case 'heading':
        return `<h3 class="block-heading">${block.text}</h3>`;
      case 'callout':
        return `<div class="callout">
            <span class="callout-icon">${iconSvg('alert', 'callout-icon-svg')}</span>
            <p>${block.text}</p>
          </div>`;
      case 'note':
        return `<p class="note">${block.text}</p>`;
      case 'map':
        return `<div class="map-embed"><iframe src="${block.src}" title="${block.title || 'Map'}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
      case 'steps':
        return `<ol class="steps">${block.items
          .map(
            (item) => `<li>
                <p>${item.text}</p>
                ${item.note ? `<p class="step-note">${item.note}</p>` : ''}
              </li>`
          )
          .join('')}</ol>`;
      case 'p':
      default:
        return `<p>${block.text}</p>`;
    }
  }

  function cardMarkup(section) {
    return `<button class="card" data-id="${section.id}" style="--accent: var(--accent-${section.accent})">
        <span class="card-icon">${iconSvg(section.icon)}</span>
        <span class="card-text">
          <span class="card-title">${section.title[lang]}</span>
          <span class="card-teaser">${section.teaser[lang]}</span>
        </span>
        <span class="card-chevron">${iconSvg('back', 'rotate')}</span>
      </button>`;
  }

  function renderHome(filter) {
    const query = (filter || '').trim().toLowerCase();
    const visible = SECTIONS.filter((s) => {
      if (!query) return true;
      const haystack = (s.title[lang] + ' ' + s.teaser[lang]).toLowerCase();
      return haystack.includes(query);
    });

    els.grid.innerHTML = visible.map(cardMarkup).join('');
    els.noResults.hidden = visible.length !== 0;
    els.noResults.textContent = t('noResults');

    els.grid.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', () => {
        location.hash = card.dataset.id;
      });
    });
  }

  function renderDetail(section) {
    els.detailIcon.innerHTML = iconSvg(section.icon);
    els.detailIcon.style.setProperty('--accent', `var(--accent-${section.accent})`);
    els.detailTitle.textContent = section.title[lang];
    els.detailBody.innerHTML = section.body[lang].map(renderBlock).join('');

    if (section.image) {
      els.detailPhotoImg.src = section.image;
      els.detailPhotoImg.alt = section.title[lang];
      els.detailPhoto.hidden = false;
    } else {
      els.detailPhoto.hidden = true;
      els.detailPhotoImg.src = '';
    }

    if (navDirection !== 0) {
      const cls = navDirection > 0 ? 'nav-enter-next' : 'nav-enter-prev';
      els.detailContent.classList.remove('nav-enter-next', 'nav-enter-prev');
      // Force reflow so the animation restarts even if the same class was just removed.
      void els.detailContent.offsetWidth;
      els.detailContent.classList.add(cls);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => els.detailContent.classList.remove(cls));
      });
      navDirection = 0;
    }
  }

  function goToRelative(delta) {
    const id = location.hash.replace('#', '');
    const idx = SECTIONS.findIndex((s) => s.id === id);
    if (idx === -1) return;
    const nextIdx = (idx + delta + SECTIONS.length) % SECTIONS.length;
    navDirection = delta > 0 ? 1 : -1;
    location.hash = SECTIONS[nextIdx].id;
  }

  function showHome() {
    els.home.hidden = false;
    els.detail.hidden = true;
    els.detail.classList.remove('active');
  }

  function showDetail(section) {
    renderDetail(section);
    els.home.hidden = true;
    els.detail.hidden = false;
    requestAnimationFrame(() => els.detail.classList.add('active'));
    els.detail.scrollTop = 0;
  }

  function route() {
    const id = location.hash.replace('#', '');
    const section = SECTIONS.find((s) => s.id === id);
    if (section) {
      showDetail(section);
    } else {
      showHome();
    }
  }

  function applyStaticText() {
    els.root.lang = lang;
    els.houseName.textContent = t('name');
    els.houseTagline.textContent = t('tagline');
    els.welcomeTitle.textContent = t('welcomeTitle');
    els.welcomeText.textContent = t('welcomeText');
    els.bannerImg.alt = t('bannerAlt');
    els.search.placeholder = t('searchPlaceholder');
    els.backBtn.setAttribute('aria-label', t('backLabel'));
    els.prevBtn.setAttribute('aria-label', t('prevLabel'));
    els.nextBtn.setAttribute('aria-label', t('nextLabel'));
    els.langButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
    els.themeButtons.forEach((btn) => {
      btn.setAttribute('aria-label', t(btn.dataset.theme === 'dark' ? 'themeDarkLabel' : 'themeLightLabel'));
    });
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem(LANG_KEY, lang);
    applyStaticText();
    renderHome(els.search.value);
    const id = location.hash.replace('#', '');
    const section = SECTIONS.find((s) => s.id === id);
    if (section) renderDetail(section);
  }

  function effectiveTheme() {
    if (theme === 'light' || theme === 'dark') return theme;
    return darkMediaQuery.matches ? 'dark' : 'light';
  }

  function applyTheme() {
    if (theme === 'light' || theme === 'dark') {
      els.root.dataset.theme = theme;
    } else {
      delete els.root.dataset.theme;
    }
    const active = effectiveTheme();
    els.themeButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.theme === active));
  }

  function setTheme(next) {
    theme = next;
    localStorage.setItem(THEME_KEY, theme);
    applyTheme();
  }

  els.langButtons.forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  els.themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => setTheme(btn.dataset.theme));
  });

  // Keep the toggle in sync if the system theme changes and the guest hasn't
  // explicitly forced one.
  darkMediaQuery.addEventListener('change', () => {
    if (theme !== 'light' && theme !== 'dark') applyTheme();
  });

  els.backBtn.addEventListener('click', () => {
    history.pushState('', document.title, window.location.pathname + window.location.search);
    showHome();
  });

  els.prevBtn.addEventListener('click', () => goToRelative(-1));
  els.nextBtn.addEventListener('click', () => goToRelative(1));

  window.addEventListener('keydown', (e) => {
    if (els.detail.hidden) return;
    if (e.key === 'ArrowRight') goToRelative(1);
    else if (e.key === 'ArrowLeft') goToRelative(-1);
  });

  // Swipe left/right between sections while a detail page is open.
  let touchStartX = 0;
  let touchStartY = 0;
  els.detail.addEventListener(
    'touchstart',
    (e) => {
      const t = e.changedTouches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
    },
    { passive: true }
  );
  els.detail.addEventListener(
    'touchend',
    (e) => {
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStartX;
      const dy = t.clientY - touchStartY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        goToRelative(dx < 0 ? 1 : -1);
      }
    },
    { passive: true }
  );

  els.search.addEventListener('input', () => renderHome(els.search.value));

  window.addEventListener('hashchange', route);

  document.getElementById('back-icon').innerHTML = iconSvg('back');
  document.getElementById('prev-icon').innerHTML = iconSvg('back');
  document.getElementById('next-icon').innerHTML = iconSvg('back', 'nav-next-icon');
  document.getElementById('search-icon').innerHTML = iconSvg('search');
  document.getElementById('theme-light-icon').innerHTML = iconSvg('sun');
  document.getElementById('theme-dark-icon').innerHTML = iconSvg('moon');

  applyStaticText();
  applyTheme();
  renderHome();
  route();
})();
