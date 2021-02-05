window.addEventListener("load", function () {
  // collapse
  document
    .getElementById("div1__collaspe")
    .addEventListener("click", function (e) {
      document.getElementById("wrapper").classList.toggle("active-wrapper");
      document
        .getElementById("btn-div1__collaspe")
        .classList.toggle("active-btn-div1__collaspe");
    });

  // slideshow
  $(".slider-footer").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
