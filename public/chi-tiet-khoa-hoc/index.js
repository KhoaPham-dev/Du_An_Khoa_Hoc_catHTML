let btnsArr = document.querySelectorAll(".ctn-sn-2 .mt-bl-dg .btns li");
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

//modal
let mdClose = document.getElementById("md-close");
mdClose.addEventListener("click", function () {
  document.getElementById("modal-comment").classList.toggle("active");
  document.querySelector(".layer-modal").classList.toggle("active");
});

let btnComment = document.getElementById("btn-comment");
btnComment.addEventListener("click", function () {
  document.getElementById("modal-comment").classList.toggle("active");
  document.querySelector(".layer-modal").classList.toggle("active");
});
