document.getElementById("nav-collapse").addEventListener("click", function (e) {
  document.querySelector("ul.ul.mb").classList.toggle("ul-active");
  document.querySelector("nav").classList.toggle("nav-active");
});

document
  .getElementById("menu-collapse-btn")
  .addEventListener("click", function (e) {
    document.getElementById("all-menu").classList.toggle("active-all-menu");
  });
document
  .getElementById("div1__collaspe")
  .addEventListener("click", function (e) {
    document.getElementById("wrapper").classList.toggle("active-wrapper");
  });
