//#region NAV
if (document.querySelectorAll("#nav").length > 0) {
  //animation
  window.addEventListener("scroll", function (e) {
    let nav = document.getElementById("nav");
    if (window.pageYOffset < nav.offsetHeight && window.screen.width > 550) {
      nav.classList.add("nav-ul-no-shadow");
    } else {
      nav.classList.remove("nav-ul-no-shadow");
    }
  });
  // collapse
  document
    .getElementById("nav-collapse")
    .addEventListener("click", function (e) {
      document.querySelector("ul.ul.mb").classList.toggle("ul-active");
    });
}

//#endregion NAV

//#region HEADER
if (document.querySelectorAll(".hd-header").length > 0) {
  // collapse
  document
    .getElementById("menu-collapse-btn")
    .addEventListener("click", function (e) {
      document
        .getElementById("all-menu")
        .classList.toggle("hd-active-all-menu");
    });
  // slideshow
  $(".hd-slider-header").slick({
    // autoplay: true,
    // autoplaySpeed: 1800,
    focusOnSelect: false,
  });
}
//#endregion HEADER

//#region FOOTER
if (document.querySelectorAll("footer.footer").length > 0) {
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
}
//#endregion FOOTER

//#region HOMEPAGE
if (document.querySelectorAll("body.homepage").length > 0) {
  // SLIDER
  $(".homepage.slider-content1").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 1800,
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
          slidesToShow: 1.05,
          slidesToScroll: 1,
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
    // autoplay: true,
    // autoplaySpeed: 1800,
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
          slidesToShow: 1.05,
          slidesToScroll: 1,
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
    // autoplay: true,
    // autoplaySpeed: 1800,
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
          slidesToShow: 1.05,
          slidesToScroll: 1,
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
    // autoplay: true,
    // autoplaySpeed: 1800,
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
          slidesToShow: 1.05,
          slidesToScroll: 1,
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
    // autoplay: true,
    // autoplaySpeed: 1800,
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
          slidesToShow: 1.05,
          slidesToScroll: 1,
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
    // autoplay: true,
    // autoplaySpeed: 1800,
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
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".homepage.slider-content7").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    // autoplay: true,
    // autoplaySpeed: 1800,
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
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
//#endregion HOMEPAGE

//#region CHI TIET KHOA HOC
if (document.querySelectorAll("body.ctkh").length > 0) {
  //Collapse for sidebar
  let barClArr = document.querySelectorAll(".ctkh.bar-1 .bar-content ul li");
  for (let i = 0; i < barClArr.length; i++) {
    barClArr[i].addEventListener("click", function (e) {
      e.currentTarget.lastElementChild.classList.toggle(
        "ctkh-active-list-wrapper"
      );
      e.currentTarget.firstElementChild.lastElementChild.classList.toggle(
        "ctkh-active-collaspe-btn-bar"
      );
    });
  }

  //Collapse for syllabus
  let lstCtr = document.querySelectorAll(
    ".ctkh.ctn-sn-2 .ctr .lst-ctr .syllabus .li"
  );
  for (let i = 0; i < lstCtr.length; i++) {
    const ele = lstCtr[i];
    ele.addEventListener("click", function (e) {
      let currentTarget = e.target;
      while (currentTarget.classList) {
        if (currentTarget.classList.contains("chapter")) {
          e.currentTarget.classList.toggle("active");
          break;
        }
        currentTarget = currentTarget.parentNode;
      }
    });
  }

  //Collapse for tab Tình huống
  let lstSituation = document.querySelectorAll(
    ".ctkh.ctn-sn-2 .ctr .lst-ctr .situation .li"
  );
  for (let i = 0; i < lstSituation.length; i++) {
    const ele = lstSituation[i];
    ele.addEventListener("click", function (e) {
      let currentTarget = e.target;
      while (currentTarget.classList) {
        if (currentTarget.classList.contains("chapter")) {
          e.currentTarget.classList.toggle("active");
          break;
        }
        currentTarget = currentTarget.parentNode;
      }
    });
  }

  //Chuyển tab Mô tả - bình luận - đánh giá
  let btnsArr = document.querySelectorAll(".ctkh.ctn-sn-2 .mt-bl-dg .btns li");
  for (let i = 0; i < btnsArr.length; i++) {
    const ele = btnsArr[i];
    ele.addEventListener("click", function (e) {
      btnsArr.forEach((e) => {
        e.classList.remove("active");
      });
      e.currentTarget.classList.toggle("active");
      document.querySelectorAll(".para").forEach((e) => {
        e.classList.remove("active");
      });
      document.querySelectorAll(".para")[i].classList.toggle("active");
    });
  }

  //Chuyển tab bài học - tình huống - luật mới - thảo luận
  let ctrBtnsArr = document.querySelectorAll(".ctn-sn-2 .ctr .btns li");
  for (let i = 0; i < ctrBtnsArr.length; i++) {
    const ele = ctrBtnsArr[i];
    ele.addEventListener("click", function (e) {
      ctrBtnsArr.forEach((e) => {
        e.classList.remove("active");
      });
      e.currentTarget.classList.toggle("active");
      document.querySelectorAll(".lst-ctr").forEach((e) => {
        e.classList.remove("active");
      });
      document.querySelectorAll(".lst-ctr ")[i].classList.toggle("active");
    });
  }

  //Hiệu ứng khi chọn gói khóa học
  let opsArr = document.querySelectorAll(".op a");
  for (let i = 0; i < opsArr.length; i++) {
    const ele = opsArr[i];
    ele.addEventListener("click", function (e) {
      opsArr.forEach((e) => {
        e.classList.remove("active");
      });
      e.currentTarget.classList.toggle("active");
      document.getElementById("nof-not-choose").style.display = "none";
    });
  }
  document.getElementById("btn-buy").addEventListener("click", function (e) {
    if (!document.querySelector(".op a.active")) {
      document.getElementById("nof-not-choose").style.display = "block";
    }
  });

  //modal hiện lên lúc click bình luận nhưng chưa đăng nhập
  let btnComment = document.getElementById("btn-comment");
  btnComment.addEventListener("click", function () {
    //if (!Auth){
    document.getElementById("modal-comment").classList.toggle("active");
    document.querySelector(".layer-modal").classList.toggle("active");
    //}
    //else{}
  });

  //Tắt modal bằng nút x
  let mdClose = document.getElementById("md-close");
  mdClose.addEventListener("click", function () {
    document.getElementById("modal-comment").classList.toggle("active");
    document.querySelector(".layer-modal").classList.toggle("active");
  });

  //Slider
  $(".ctkh.slider-content1").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed,: 2000,
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
  $(".ctkh.slider-content2").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed,: 2000,
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
  $(".ctkh.slider-content3").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed,: 2000,
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
  $(".ctkh.slider-content4").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed,: 2000,
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
}
//#endregion CHI TIET KHOA HOC

//#region HOC ONLINE
if (document.querySelectorAll("body.hoconline").length > 0) {
  //Collapse Cau hoi tinh huong
  let lstSituation = document.querySelectorAll(
    ".hoconline.lst-ctr .situation .li"
  );
  for (let i = 0; i < lstSituation.length; i++) {
    const ele = lstSituation[i];
    ele.addEventListener("click", function (e) {
      let currentTarget = e.target;
      while (currentTarget.classList) {
        if (currentTarget.classList.contains("chapter")) {
          e.currentTarget.classList.toggle("active");
          break;
        }
        currentTarget = currentTarget.parentNode;
      }
    });
  }
  //Switch Tab
  let btnsArr = document.querySelectorAll(".hoconline.sn--right .tabs .tab");
  for (let i = 0; i < btnsArr.length; i++) {
    const ele = btnsArr[i];
    ele.addEventListener("click", function (e) {
      btnsArr.forEach((e) => {
        e.classList.remove("active");
      });
      e.currentTarget.classList.toggle("active");
      document.querySelectorAll(".hoconline.tab-ct").forEach((e) => {
        e.classList.remove("active");
      });
      document
        .querySelectorAll(".hoconline.tab-ct")
        [i].classList.toggle("active");
    });
  }
}
//#endregion HOC ONLINE

//#region TRANG CA NHAN VA CAI DAT
if (document.querySelectorAll("body.tcnvcd").length > 0) {
  // Slider
  $(".tcnvcd.slider-content1").slick({
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    responsive: [
      {
        breakpoint: 815,
        settings: {
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
    ],
  });
  $(".tcnvcd.slider-content2").slick({
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          centerMode: true,
        },
      },
    ],
  });
}
//#endregion TRANG CA NHAN VA CAI DAT

//#region DANH SACH TIN TUC
if (document.querySelectorAll("body.dstt").length > 0) {
  //SLIDER
  $(".dstt.slider-content4").slick({
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
  $(".dstt.slider-1").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    centerMode: false,
  });

  $(".dstt.slider-2").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
//#endregion DANH SACH TIN TUC

//#region KHOA HOC
if (document.querySelectorAll("body.khoahoc").length > 0) {
  //Collapse content in sidebar
  let barClArr = document.querySelectorAll(".khoahoc.bar-1 .bar-content ul li");
  for (let i = 0; i < barClArr.length; i++) {
    barClArr[i].addEventListener("click", function (e) {
      e.currentTarget.lastElementChild.classList.toggle("active-list-wrapper");
      e.currentTarget.firstElementChild.lastElementChild.classList.toggle(
        "active-collaspe-btn-bar"
      );
    });
  }

  document.getElementById("expand-nav").addEventListener("click", function (e) {
    e.target.classList.toggle("expand-nav-on");
    document.getElementById("sidebar").classList.toggle("sidebar-active");
  });

  //SLIDER
  $(".khoahoc.slider-content1").slick({
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
}
//#endregion KHOA HOC

//#region TIN TUC CHI TIET
if (document.querySelectorAll("body.ttct").length > 0) {
  $(".ttct.slider-content4").slick({
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
  $(".ttct.slider-1").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    centerMode: false,
  });

  $(".ttct.slider-2").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
//#endregion TIN TUC CHI TIET

//#region TIN TUC THEO DANH MUC
if (document.querySelectorAll("body.tttdm").length > 0) {
  //SLIDER
  $(".tttdm.slider-content4").slick({
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
  $(".tttdm.slider-1").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    centerMode: false,
  });

  $(".tttdm.slider-2").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
//#endregion TIN TUC THEO DANH MUC
