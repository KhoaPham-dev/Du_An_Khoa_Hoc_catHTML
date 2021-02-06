$(".l-c-ds-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".l-c-ds",
});
$(".l-c-ds").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".l-c-ds-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});

$(".slider-content1").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 815,
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
