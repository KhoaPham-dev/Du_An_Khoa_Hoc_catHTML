let lstSituation = document.querySelectorAll(".lst-ctr .situation .li");
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
