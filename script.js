var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
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
  slidesPerView: 'auto',
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  speed: 5000,
  autoplay: {
    enabled: true,
		delay: 0,
		pauseOnMouseEnter: true,
		disableOnInteraction: true,
  },
  freeMode: true,

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

document.onscroll = (e) => {
  console.log(e, window.scrollY);
  if (window.scrollY > 100) {
    document.querySelector(".nav_bar").classList.add("sticky");
  } else {
    document.querySelector(".nav_bar").classList.remove("sticky");
  }
};
