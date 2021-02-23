$(".slider-content1").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 815,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
