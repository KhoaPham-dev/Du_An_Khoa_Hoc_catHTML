let btnsArr = document.querySelectorAll(".sn--right .tabs .tab");
for (let i = 0; i < btnsArr.length; i++) {
  const ele = btnsArr[i];
  ele.addEventListener("click", function (e) {
    btnsArr.forEach((e) => {
      e.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
    document.querySelectorAll(".tab-ct").forEach((e) => {
      e.classList.remove("active");
    });
    document.querySelectorAll(".tab-ct")[i].classList.toggle("active");
  });
}

document.getElementById("btn-sidebar").addEventListener("click", function (e) {
  document.querySelector(".sn.sn--right").classList.toggle("active");
  document.getElementById("btn-sidebar").classList.toggle("active");
});
