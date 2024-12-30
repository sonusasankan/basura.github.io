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

document.onscroll = (e) => {
  console.log(e, window.scrollY);
  if (window.scrollY > 100) {
    document.querySelector(".nav_bar").classList.add("sticky");
  } else {
    document.querySelector(".nav_bar").classList.remove("sticky");
  }
};
