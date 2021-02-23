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
  e.preventDefault();
  if (!document.querySelector(".op a.active")) {
    document.getElementById("nof-not-choose").style.display = "block";
  } else {
  }
});
