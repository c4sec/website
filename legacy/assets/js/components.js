/* C4Sec — shared, region-aware header & footer.
   On each page set on <body>:
     data-page   = home|about|services|sectors|contact
     data-region = global|tr|az        (default: global)
     data-root   = path to site root   ("" for root pages, "../" for /tr/, /az/)
   Place <div id="site-header"></div> and <div id="site-footer"></div>. */
(function () {
  const body = document.body;
  const page   = body.getAttribute("data-page")   || "";
  const region = body.getAttribute("data-region") || "global";
  const root   = body.getAttribute("data-root")   || "";   // "" or "../"
  const A = (p) => root + "assets/" + p;                    // asset URL
  const act = (p) => (p === page ? ' class="active"' : "");

  // Regions: home is root-relative so it works from anywhere on the site.
  const REGIONS = {
    global: { flag: "🌐", key: "region.global", home: root + "index.html" },
    tr:     { flag: "🇹🇷", key: "region.tr",     home: root + "tr/index.html" },
    az:     { flag: "🇦🇿", key: "region.az",     home: root + "az/index.html", soon: true },
  };

  // Per-region navigation (links are relative to the current folder).
  const NAV = {
    global: [["nav.home","index.html"],["nav.about","about.html"],["nav.services","services.html"],["nav.sectors","sectors.html"],["nav.contact","contact.html"]],
    tr:     [["nav.home","index.html"],["nav.services","services.html"],["nav.contact","contact.html"]],
    az:     [["nav.home","index.html"],["nav.services","services.html"],["nav.contact","contact.html"]],
  };
  const nav = NAV[region] || NAV.global;
  const logo = region === "global" ? "c4sec-logo.png" : "c4sec-logo.png";

  const navItems = nav.map(([k, href]) => {
    const p = href.replace(".html", "").replace("index", "home");
    return `<li><a href="${href}"${act(p)} data-i18n="${k}">${k}</a></li>`;
  }).join("");

  const regionItems = Object.keys(REGIONS).map(code => {
    const r = REGIONS[code];
    const cur = code === region ? " active" : "";
    const inner = `<span class="region__flag">${r.flag}</span><span data-i18n="${r.key}">${code}</span>`;
    if (r.soon) {
      return `<span class="region__opt region__opt--soon">${inner}<span class="region__soon" data-i18n="region.soon">soon</span></span>`;
    }
    return `<a class="region__opt${cur}" href="${r.home}">${inner}</a>`;
  }).join("");

  const header = `
  <header class="header">
    <div class="container nav">
      <a href="${REGIONS[region].home}" class="brand" aria-label="C4Sec home">
        <img src="${A('img/'+logo)}" alt="C4Sec — Consulting4Sec" class="brand__logo" />
        <span class="brand__divider"></span>
        <span class="brand__region"><span class="brand__region-flag">${REGIONS[region].flag}</span><span data-i18n="${REGIONS[region].key}">C4Sec</span></span>
      </a>
      <nav>
        <ul class="menu">${navItems}</ul>
      </nav>
      <div class="nav__right">
        <div class="region">
          <button class="region__btn" aria-label="Change region">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
            <span class="region__cur">${REGIONS[region].flag}</span>
            <svg class="region__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="region__menu">
            <div class="region__label" data-i18n="region.label">Region</div>
            ${regionItems}
          </div>
        </div>
        <div class="lang">
          <button class="lang__btn" aria-label="Change language">
            <span class="lang__current">EN</span>
            <svg class="region__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="lang__menu"></div>
        </div>
        <a href="contact.html" class="btn btn--dark" data-i18n="nav.cta">Get in touch</a>
        <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>`;

  const footerCompany = nav.map(([k, href]) => `<li><a href="${href}" data-i18n="${k}">${k}</a></li>`).join("");

  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div>
          <a href="${REGIONS[region].home}" class="brand" aria-label="C4Sec home">
            <img src="${A('img/c4sec-logo-white.png')}" alt="C4Sec — Consulting4Sec" class="brand__logo brand__logo--footer" />
          </a>
          <p class="footer__about" data-i18n="footer.about">Empowering organisations with expert advisory in information security, compliance and business resilience.</p>
          <div class="footer__social">
            <a href="https://www.linkedin.com/company/consulting-4-sec/" aria-label="LinkedIn" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.5H5.67v7.84h2.67zM7 9.34a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18.34v-4.3c0-2.3-1.23-3.37-2.86-3.37-1.32 0-1.9.72-2.23 1.23v-1.06h-2.67v7.84h2.67v-4.38c0-.23.02-.46.09-.63.18-.46.6-.94 1.32-.94.93 0 1.3.71 1.3 1.75v4.2h2.67z"/></svg></a>
            <a href="https://consulting4sec.medium.com" aria-label="Medium" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.4 7.5a.9.9 0 0 0-.3-.76L2.3 4.6V4.3h5.5l4.2 9.3 3.7-9.3H21v.3l-1.5 1.45a.45.45 0 0 0-.17.43v10.8a.45.45 0 0 0 .17.43L21 19.5v.3h-7.4v-.3l1.55-1.5c.15-.15.15-.2.15-.43V9.1l-4.3 10.7h-.6L5.4 9.1v7.16c-.04.31.06.62.28.84l2 2.44v.3H2.3v-.3l2-2.44c.22-.22.32-.53.27-.84V7.5z"/></svg></a>
          </div>
        </div>
        <div>
          <h5 data-i18n="footer.company">Company</h5>
          <ul class="footer__links">${footerCompany}</ul>
        </div>
        <div>
          <h5 data-i18n="footer.services">Services</h5>
          <ul class="footer__links">
            <li><a href="services.html" data-i18n="pillars.c1t">Consulting</a></li>
            <li><a href="services.html" data-i18n="pillars.c2t">Training</a></li>
            <li><a href="services.html" data-i18n="pillars.c3t">Audit</a></li>
          </ul>
        </div>
        <div>
          <h5 data-i18n="region.label">Region</h5>
          <ul class="footer__links">
            <li><a href="${root}index.html">🌐 <span data-i18n="region.global">Global</span></a></li>
            <li><a href="${root}tr/index.html">🇹🇷 <span data-i18n="region.tr">Türkiye</span></a></li>
            <li><span style="opacity:.6">🇦🇿 <span data-i18n="region.az">Azərbaycan</span> · <span data-i18n="region.soon">soon</span></span></li>
            <li><a href="mailto:info@c4sec.com">info@c4sec.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span data-i18n="footer.rights">© 2026 C4Sec — Consulting4Sec. All rights reserved.</span>
        <span data-i18n="footer.partner">Your Compliance Partner</span>
      </div>
    </div>
  </footer>`;

  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;

  // region dropdown toggle
  const regionEl = document.querySelector(".region");
  const regionBtn = document.querySelector(".region__btn");
  if (regionEl && regionBtn) {
    regionBtn.addEventListener("click", (e) => { e.stopPropagation(); regionEl.classList.toggle("open"); });
    document.addEventListener("click", () => regionEl.classList.remove("open"));
  }
})();
