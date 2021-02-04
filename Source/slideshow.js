class SLIDERS {
  constructor(classname, range) {
    this.classname = classname;
    this.range = range;
    this.slideIndex = 0;
  }
  plusSlides(n) {
    document.getElementsByClassName(this.classname)
      ? this.showSlides((this.slideIndex += n))
      : null;
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName(this.classname);

    if (n > (slides.length - 1) / this.range) {
      this.slideIndex = 0;
    }
    if (n < 0) {
      this.slideIndex = (slides.length - 1) / this.range;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (
      i = this.slideIndex * this.range;
      i < this.slideIndex * this.range + this.range;
      i++
    ) {
      if (slides[i]) {
        slides[i].style.display = "block";
      }
    }
  }
}

let sliderHeader = new SLIDERS("mySlides", 1);
let sliderSection3rd = new SLIDERS("mySlides3rd", 3);
let sliderSection4th = new SLIDERS("mySlides4th", 3);
let sliderSection5th = new SLIDERS(
  "mySlides5th",
  window.screen.width <= 550 ? 1 : 4
);
let sliderSection6th = new SLIDERS(
  "mySlides6th",
  window.screen.width <= 550 ? 1 : 3
);
let sliderSection8th = new SLIDERS(
  "mySlides8th",
  window.screen.width <= 550 ? 1 : 4
);
window.addEventListener("DOMContentLoaded", function () {
  sliderHeader.showSlides(sliderHeader.slideIndex);
  sliderSection3rd.showSlides(sliderSection3rd.slideIndex);
  sliderSection4th.showSlides(sliderSection4th.slideIndex);
  sliderSection5th.showSlides(sliderSection5th.slideIndex);
  sliderSection6th.showSlides(sliderSection6th.slideIndex);
  sliderSection8th.showSlides(sliderSection8th.slideIndex);
});
