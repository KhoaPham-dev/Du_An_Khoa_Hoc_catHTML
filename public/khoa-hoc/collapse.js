//Collapse
let barClArr = document.querySelectorAll(".bar-1 .bar-content ul li");
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
  document.getElementById("nav-bar").classList.toggle("nav-bar-active");
});
