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

let lstCtr = document.querySelectorAll(".ctn-sn-2 .ctr .lst-ctr .syllabus .li");
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

let lstSituation = document.querySelectorAll(
  ".ctn-sn-2 .ctr .lst-ctr .situation .li"
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
