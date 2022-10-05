let nextBtn = document.querySelector(".slider .nextAndPrevious button.next");
let previousBtn = document.querySelector(".slider .nextAndPrevious button.previous")
let slider = document.querySelector(".slider .container .img");
let slideNumber = document.querySelector(".slider .container span");
let slidePhoto = document.querySelectorAll(".slider .nextAndPrevious .numbers span");


let counterSlideNumber = 1;
let counterSlidePhoto = 1;
let counterPhoto = 1;

nextBtn.addEventListener("click", function () {
  counterSlideNumber++;
  if (counterSlideNumber > 4) {
    counterSlideNumber = slidePhoto.length;
  }
  slideNumber.innerHTML = `Slide #${counterSlideNumber} of 5`;
  /////////////////////////////////////////////////////////////////////////////////////
  if (counterSlidePhoto === 0) {
    slidePhoto[slidePhoto.length - 1].classList = "";
    slidePhoto[counterSlidePhoto].classList = "special";
  }
  if (counterSlidePhoto === 1 || counterSlidePhoto === 2 || counterSlidePhoto === 3 || counterSlidePhoto === 4) {
    slidePhoto[counterSlidePhoto - 1].classList = "";
    slidePhoto[counterSlidePhoto].classList = "special";
  }
  counterSlidePhoto++;
  if (counterSlidePhoto > 4) {
    counterSlidePhoto = slidePhoto.length;
  }
  /////////////////////////////////////////////////////////////////////////////////////
  if (counterPhoto === 1) {
    slider.style.cssText = "left: -640px";
  }
  if (counterPhoto === 2) {
    slider.style.cssText = "left: -1280px";
  }
  if (counterPhoto === 3) {
    slider.style.cssText = "left: -1920px";
  }
  if (counterPhoto === 4) {
    slider.style.cssText = "left: -2560px";
  }
  counterPhoto++
  if (counterPhoto >= 5) {
    counterPhoto = 5;
  }
})

previousBtn.addEventListener("click", () => {
  counterSlideNumber--;
  if (counterSlideNumber < 1) {
    counterSlideNumber = 1;
  }
  slideNumber.innerHTML = `Slide #${counterSlideNumber} of 5`;
  /////////////////////////////////////////////////////////////////////////////////////
  counterSlidePhoto--;
  if (counterSlidePhoto < 1) {
    counterSlidePhoto = 1;
  }
  if (counterSlidePhoto === 0) {
    slidePhoto[1].classList = "";
    slidePhoto[counterSlidePhoto].classList = "special";
  }
  if (counterSlidePhoto === 1 || counterSlidePhoto === 2 || counterSlidePhoto === 3 || counterSlidePhoto === 4) {
    slidePhoto[counterSlidePhoto].classList = "";
    slidePhoto[counterSlidePhoto - 1].classList = "special";
  }
  /////////////////////////////////////////////////////////////////////////////////////
  counterPhoto--
  if (counterPhoto === 1) {
    slider.style.cssText = "left: 0px";
  }
  if (counterPhoto === 2) {
    slider.style.cssText = "left: -640px";
  }
  if (counterPhoto === 3) {
    slider.style.cssText = "left: -1280px";
  }
  if (counterPhoto === 4) {
    slider.style.cssText = "left: -1920px";
  }
  if (counterPhoto <= 0) {
    counterPhoto = 1;
  }
})