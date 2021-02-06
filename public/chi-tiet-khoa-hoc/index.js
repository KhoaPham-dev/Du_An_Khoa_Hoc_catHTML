let btnsArr = document.querySelectorAll(".ctn-sn-2 .mt-bl-dg .btns li");
for (let i = 0; i < btnsArr.length; i++) {
  const ele = btnsArr[i];
  ele.addEventListener("click", function (e) {
    btnsArr.forEach((e) => {
      e.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
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
  });
}
