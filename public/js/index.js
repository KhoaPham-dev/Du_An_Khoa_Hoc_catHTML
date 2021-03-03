//#region NAV
//animation
window.addEventListener("scroll", function (e) {
  let nav = document.getElementById("nav-ul");
  if (window.pageYOffset < nav.offsetHeight && window.screen.width > 550) {
    nav.classList.add("nav-ul-no-shadow");
  } else {
    nav.classList.remove("nav-ul-no-shadow");
  }
});
// collapse
document.getElementById("nav-collapse").addEventListener("click", function (e) {
  document.querySelector("ul.ul.mb").classList.toggle("ul-active");
});
//#endregion NAV

//#region HEADER
// collapse
document
  .getElementById("menu-collapse-btn")
  .addEventListener("click", function (e) {
    document.getElementById("all-menu").classList.toggle("hd-active-all-menu");
  });
// slideshow
$(".hd-slider-header").slick({
  autoplay: true,
  autoplaySpeed: 1800,
  focusOnSelect: false,
});
//#endregion HEADER

//#region FOOTER
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

// collapse
document
  .getElementById("div1__collaspe")
  .addEventListener("click", function (e) {
    document.getElementById("div1__collaspe").classList.toggle("active");
    document.getElementById("wrapper").classList.toggle("active");
  });
//#endregion FOOTER

//#region HOMEPAGE

// SLIDER
$(".homepage.slider-content1").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2500,
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
        centerMode: true,
      },
    },
  ],
});
$(".homepage.slider-content2").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2500,
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
        centerMode: true,
      },
    },
  ],
});
$(".homepage.slider-content3").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2500,
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
        centerMode: true,
      },
    },
  ],
});
$(".homepage.slider-content4").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2500,
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
        centerMode: true,
      },
    },
  ],
});
$(".homepage.slider-content5").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2500,
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
        centerMode: true,
      },
    },
  ],
});
$(".homepage.slider-content6").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2500,
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
        centerMode: true,
      },
    },
  ],
});
$(".homepage.slider-content7").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2500,
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
        centerMode: true,
      },
    },
  ],
});

//#endregion HOMEPAGE
