var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

const partnersSwiper = new Swiper('#partnersSwiper', {
  // Optional parameters
  slidesPerView: 6,
  direction: 'horizontal',
  loop: true,
  speed: 2000,
  autoplay: {
    enabled: true,
		delay: 0,
		pauseOnMouseEnter: true,
		disableOnInteraction: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
