// NOVA Summit — tiny progressive enhancement.
// The page works fully without JavaScript; this only adds
// gentle fade-up reveals as sections enter the viewport.
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.section .wrap, .hero-in');
  els.forEach(el => el.classList.add('rv'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
});
