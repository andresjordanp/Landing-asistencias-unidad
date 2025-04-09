export const scrollWithOffset = (el: HTMLElement) => {
  const isMobile = window.innerWidth < 768; // Tailwind breakpoint para md
  const yOffset = isMobile ? -150 : -100; // Ajustá los valores según tu navbar
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};
