const getAttData = (element) => Number(element.getAttribute('data-speed'));
const parallax1 = document.querySelectorAll('#parallax-1');
const parallax2 = document.querySelectorAll('#parallax-2');
const upperLayerIntro = document.querySelector(`[src="./asset/tree-front.svg"]#parallax-1`);
const upperLayerOutro = document.querySelector(`#bottom-front`);

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const screen = window.innerHeight;
  
  if (upperLayerIntro.getBoundingClientRect().y + screen > 0) {
    parallax1.forEach((parallax) => (
      parallax.style.transform = `translateY(${scrolled * getAttData(parallax)}px)`
    ));
  }
  
  if (upperLayerOutro.getBoundingClientRect().y - screen < 0) {
    parallax2.forEach((parallax) => (
      parallax.style.transform = `translateY(-${scrolled * getAttData(parallax) / 10}px)`
    ));
  }
});
