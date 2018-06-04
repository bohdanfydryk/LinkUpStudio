var swiper_slider = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  effect: 'coverflow',
  initialSlide: 0,
  speed: 800,
  coverflow: {
    rotate: 0,
    stretch: 20,
    depth: 100,
    modifier: 3,
    slideShadows: false
  },
  breakpoints: {
    690: {
      slidesPerView: 1
    },
    1000:{
      slidesPerView: 2
    }
  },
  simulateTouch: true,
  prevButton: '.arrow-left',
  nextButton: '.arrow-right'
});

function openNav() {
  document.getElementById("modal-menu").style.display = "block";
}

/* Close */
function closeNav() {
  document.getElementById("modal-menu").style.display = "none";
}

function categoryDrop() {
  document.getElementById("category-drop").style.display = "block";

}