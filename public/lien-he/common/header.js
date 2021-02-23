window.addEventListener("load", function () {
  // collapse
  document
    .getElementById("menu-collapse-btn")
    .addEventListener("click", function (e) {
      document.getElementById("all-menu").classList.toggle("active-all-menu");
    });
  // slideshow
  $(".slider-header").slick({
    autoplay: true,
    autoplaySpeed: 1800,
    focusOnSelect: false,
  });
});
