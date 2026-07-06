/* =========================================================
   YAM PILATES STUDIO — interacciones
   ========================================================= */

/* --- Configuración de contacto (ÚNICO lugar para editar) --------------------
   TODO: reemplazar por el WhatsApp definitivo.
   Por ahora apunta al teléfono de Atrio Studio (provisorio).
   Formato internacional SIN "+" ni espacios. Ej: 5492235550000
   Si queda vacío, el botón abre WhatsApp sin destinatario prefijado.        */
const YAM = {
  whatsapp: '',
  waText: 'Hola Yam! Me gustaría reservar una clase de pilates 🌿',
};

document.addEventListener('DOMContentLoaded', () => {
  /* ---- Links de WhatsApp centralizados ---- */
  const waHref = YAM.whatsapp
    ? `https://wa.me/${YAM.whatsapp}?text=${encodeURIComponent(YAM.waText)}`
    : `https://wa.me/?text=${encodeURIComponent(YAM.waText)}`;
  document.querySelectorAll('[data-whatsapp]').forEach((a) => {
    a.setAttribute('href', waHref);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
  });

  /* ---- Navbar: sólido al scrollear ---- */
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Menú móvil ---- */
  const toggle = document.querySelector('.nav__toggle');
  toggle?.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', String(expanded));
  });
  document.querySelectorAll('.nav__links a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });

  /* ---- Reveals on-scroll ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  /* ---- Año dinámico en el footer ---- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
