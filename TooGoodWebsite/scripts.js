const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});

// document.querySelector("#child1").addEventListener("mouseenter", function () {
//   gsap.to("#cursor", {
//     transform: "translate(-50%,-50%) scale(1)",
//   });
// });

// document.querySelector("#child1").addEventListener("mouseleave", function () {
//   gsap.to("#cursor", {
//     transform: "translate(-50%,-50%) scale(0)",
//   });
// });

document.querySelectorAll(".child").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
});
document.querySelectorAll(".child").forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
});

const videoConAnimation = () => {
  var videoCon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");
  videoCon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videoCon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videoCon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 50,
      top: dets.y - 50,
    });
  });
};
videoConAnimation();

const loadingAnimation = () => {
  gsap.from("#page1 h1", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
    stagger: 0.3,
  });

  gsap.from("#page1 video", {
    scale: 0.9,
    opacity: 0,
    delay: 1,
    duration: 0.5,
  });
};
loadingAnimation();
