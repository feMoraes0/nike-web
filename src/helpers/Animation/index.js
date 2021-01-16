
const BOTTOM_UP = 'animate-bottom-up';
const TOP_DOWN = 'animate-top-down';

const animate = (element, animation)  => {
  element.classList.toggle(animation);
  setTimeout(() => {
    element.classList.toggle(animation);
  }, 1000);
};

export default { animate, BOTTOM_UP, TOP_DOWN };