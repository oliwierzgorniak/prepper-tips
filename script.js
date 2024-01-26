// copied from
// https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/

const targetAudienceSectionElement = document.querySelector("#audience");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("fired");
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.5 }
);

const doorsElement = document.querySelector(".target-audience__img--doors");
observer.observe(doorsElement);
