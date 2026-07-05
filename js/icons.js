// Minimal hand-drawn line icons (24x24, stroke-based, currentColor).
// No external icon library — keeps the manual fully self-contained and offline-friendly.

const ICONS = {
  hotTub: `<path d="M2 17c1.2-1.6 2.8-1.6 4 0s2.8 1.6 4 0 2.8-1.6 4 0 2.8 1.6 4 0 2.8-1.6 4 0"/>
    <path d="M2 12c1.2-1.6 2.8-1.6 4 0s2.8 1.6 4 0 2.8-1.6 4 0 2.8 1.6 4 0 2.8-1.6 4 0"/>
    <path d="M4 21h16"/>`,

  flame: `<path d="M12 2.5c-.4 2.6-2 4-3.4 5.6C7 9.8 6 11.5 6 13.5a6 6 0 0 0 12 0c0-1.7-.7-3-1.7-4.1.1 1.8-.7 2.9-1.6 2.6-1-.3-1-1.6-.8-2.8.3-1.6.1-3.6-1.9-6.7Z"/>`,

  kitchen: `<rect x="4" y="10" width="16" height="9" rx="2"/>
    <path d="M4 10a8 8 0 0 1 16 0"/>
    <path d="M9 5.5C9 4 8.3 3.3 8 2M14 5.5c0-1.5-.7-2.2-1-3"/>`,

  wind: `<path d="M2 8h11a2.5 2.5 0 1 0-2.5-2.5"/>
    <path d="M2 12h15.5a3 3 0 1 1-3 3"/>
    <path d="M2 16h8.5a2 2 0 1 1-2 2"/>`,

  sun: `<circle cx="12" cy="12" r="4.5"/>
    <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/>`,

  moon: `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`,

  thermometer: `<path d="M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0Z"/>
    <path d="M10 8h1.5"/>`,

  sauna: `<path d="M4 20V9l8-5 8 5v11"/>
    <path d="M9 20v-6h6v6"/>
    <path d="M9 4.5c.6-1 .6-1.7 0-2.7M12 4.5c.6-1 .6-1.7 0-2.7M15 4.5c.6-1 .6-1.7 0-2.7"/>`,

  washer: `<rect x="4" y="3" width="16" height="18" rx="2"/>
    <circle cx="12" cy="13" r="5"/>
    <circle cx="12" cy="13" r="2"/>
    <circle cx="7.5" cy="6" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="10.5" cy="6" r="0.75" fill="currentColor" stroke="none"/>`,

  bed: `<path d="M3 19v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/>
    <path d="M3 19v2M21 19v2"/>
    <path d="M5 10V6a2 2 0 0 1 2-2h3v4"/>
    <path d="M3 15h18"/>`,

  alert: `<circle cx="12" cy="12" r="9"/>
    <path d="M12 7.5v6"/>
    <circle cx="12" cy="16.7" r="0.9" fill="currentColor" stroke="none"/>`,

  recycle: `<path d="M3 7h18"/>
    <path d="M5 7l1 13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-13"/>
    <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
    <path d="M10 11v6M14 11v6"/>`,

  parking: `<rect x="3" y="3" width="18" height="18" rx="5"/>
    <path d="M9 7v10"/>
    <path d="M9 7h3.5a2.5 2.5 0 0 1 0 5H9"/>`,

  back: `<path d="M15 18l-6-6 6-6"/>`,

  search: `<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>`,

  close: `<path d="M6 6l12 12M18 6L6 18"/>`,
};

function iconSvg(key, cls) {
  const body = ICONS[key] || '';
  return `<svg class="${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}
