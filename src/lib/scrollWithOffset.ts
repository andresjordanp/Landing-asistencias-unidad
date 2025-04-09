export const scrollWithOffset = (el: HTMLElement) => {
  const yOffset = -80; // ajustá según altura del navbar en mobile
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};
