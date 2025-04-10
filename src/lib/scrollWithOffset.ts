export const scrollWithOffset = (el: HTMLElement) => {
  const isMobile = window.innerWidth < 768; // Tailwind breakpoint para md
  const yOffset = isMobile ? -150 : -100;   // Ajustá según tu navbar
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  // Delay para esperar que el contenido esté montado
  setTimeout(() => {
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, 200); // Podés probar con 100 o 300ms si querés
};
