(function () {
  const LANG_KEY = 'rvilla-lang';
  const defaultLang = (navigator.language || '').toLowerCase().startsWith('fi') ? 'fi' : 'en';
  let lang = localStorage.getItem(LANG_KEY) || defaultLang;

  const els = {
    root: document.documentElement,
    home: document.getElementById('home-view'),
    detail: document.getElementById('detail-view'),
    grid: document.getElementById('card-grid'),
    detailBody: document.getElementById('detail-body'),
    detailTitle: document.getElementById('detail-title'),
    detailIcon: document.getElementById('detail-icon'),
    backBtn: document.getElementById('back-btn'),
    langButtons: document.querySelectorAll('.lang-btn'),
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
    els.langButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
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

  els.langButtons.forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  els.backBtn.addEventListener('click', () => {
    history.pushState('', document.title, window.location.pathname + window.location.search);
    showHome();
  });

  els.search.addEventListener('input', () => renderHome(els.search.value));

  window.addEventListener('hashchange', route);

  document.getElementById('back-icon').innerHTML = iconSvg('back');
  document.getElementById('search-icon').innerHTML = iconSvg('search');

  applyStaticText();
  renderHome();
  route();
})();
