/* C4Sec — UI interactions */
document.addEventListener("DOMContentLoaded", () => {
  // i18n
  if (window.C4SEC_I18N) window.C4SEC_I18N.initLang();

  // mobile menu
  const header = document.querySelector(".header");
  const burger = document.querySelector(".burger");
  if (burger && header) {
    burger.addEventListener("click", () => header.classList.toggle("menu-open"));
  }

  // language dropdown toggle
  const langBtn = document.querySelector(".lang__btn");
  const lang = document.querySelector(".lang");
  if (langBtn && lang) {
    langBtn.addEventListener("click", (e) => { e.stopPropagation(); lang.classList.toggle("open"); });
    document.addEventListener("click", () => lang.classList.remove("open"));
  }

  // reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));

  // close mobile menu on link click
  document.querySelectorAll(".menu a").forEach(a =>
    a.addEventListener("click", () => header && header.classList.remove("menu-open"))
  );

  // contact form (demo only — no backend)
  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-status");
      if (note) { note.style.display = "block"; }
      form.reset();
    });
  }
});
