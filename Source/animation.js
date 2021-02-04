window.addEventListener("scroll", function (e) {
  let nav = document.getElementById("nav");
  if (window.pageYOffset < nav.offsetHeight && window.screen.width > 550) {
    nav.classList.add("nav-no-shadow");
  } else {
    nav.classList.remove("nav-no-shadow");
  }
});
