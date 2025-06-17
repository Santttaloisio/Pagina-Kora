document.addEventListener('DOMContentLoaded', () => {
  const carrusel = document.getElementById("GaleriaCarrusel");
  if (!carrusel) return;

  let scrollAmount = 0;
  let animationId;
  const velocidadXsegundo = 120;
  const velocidadPorFrame = velocidadXsegundo / 1200;

  function smoothScroll() {
    scrollAmount += velocidadPorFrame;
    if (scrollAmount >= carrusel.scrollWidth - carrusel.clientWidth) {
      scrollAmount = 0;
    }
    carrusel.scrollLeft = scrollAmount;
    animationId = requestAnimationFrame(smoothScroll);
  }

  carrusel.addEventListener('mouseover', () => {
    cancelAnimationFrame(animationId);
  });

  carrusel.addEventListener('mouseleave', () => {
    animationId = requestAnimationFrame(smoothScroll);
  });

  animationId = requestAnimationFrame(smoothScroll);
});
