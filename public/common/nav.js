window.addEventListener("load", function () {
  //animation
  window.addEventListener("scroll", function (e) {
    let nav = document.getElementById("nav");
    if (window.pageYOffset < nav.offsetHeight && window.screen.width > 550) {
      nav.classList.add("nav-no-shadow");
    } else {
      nav.classList.remove("nav-no-shadow");
    }
  });
  // collapse
  document
    .getElementById("nav-collapse")
    .addEventListener("click", function (e) {
      document.querySelector("ul.ul.mb").classList.toggle("ul-active");
      document.querySelector("nav").classList.toggle("nav-active");
    });
});
