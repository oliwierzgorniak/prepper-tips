const props = [
  {
    coords: { x0: 0, x1: 0.25, y0: 0.217, y1: 0.696 },
    transformOrigin: "0% 30%",
    zoom: 1.5,
  },
  {
    coords: { x0: 0.452, x1: 0.5, y0: 0.28, y1: 0.57 },
    transformOrigin: "28% 20%",
    zoom: 1.5,
  },
  {
    coords: { x0: 0.692, x1: 0.989, y0: 0.0771, y1: 0.56 },
    transformOrigin: "90% 0%",
    zoom: 1.5,
  },
  {
    coords: { x0: 0.254, x1: 0.371, y0: 0.329, y1: 0.944 },
    transformOrigin: "30% 90%",
    zoom: 1.3,
  },
  {
    coords: { x0: 0.449, x1: 0.905, y0: 0.5732, y1: 0.974 },
    transformOrigin: "40% 100%",
    zoom: 1.2,
  },
];

const challenges = [
  "Have your recently thought about being mind controled by the government? With tin foil hats with garlic we can be safe. Let's make them. You can check out the tip on this website: http://oliwier-zgorniak.tech/prepper-tips/tips/",
  "With your grandma you won't be hungry during a disaster. Ask your grandma if she is going to join you during one. You can check out the tip on this website: http://oliwier-zgorniak.tech/prepper-tips/tips/",
  "If you need a bunker you can use a natural cave for that. Find one in your place. You can check out the tip on this website: http://oliwier-zgorniak.tech/prepper-tips/tips/",
  "I found a cool idea. Let's grab our nerf guns and go to a shootin rage. It is gonna be fun. You can check out the tip on this website: http://oliwier-zgorniak.tech/prepper-tips/tips/",
  "We can take bricks and make a camouflage for our cars. You can check out the tip on this website: http://oliwier-zgorniak.tech/prepper-tips/tips/",
];

const tipsImgElement = document.querySelector("#tips-img");
const tipsModalElements = document.querySelectorAll(".tips__modal");

let isZoomed = false;
tipsImgElement.addEventListener("click", (e) => {
  if (isZoomed) {
    tipsImgElement.style.transform = "scale(1)";
    tipsModalElements.forEach((el) => el.classList.add("visually-hidden"));

    isZoomed = false;
    return;
  }

  const xPercent = e.offsetX / e.target.clientWidth;
  const yPercent = e.offsetY / e.target.clientHeight;

  // console.log(xPercent, yPercent);

  props.forEach((prop, i) => {
    const coords = prop.coords;
    const { x0, x1, y0, y1 } = coords;

    if (xPercent >= x0 && xPercent <= x1 && yPercent >= y0 && yPercent <= y1) {
      tipsImgElement.style.transformOrigin = prop.transformOrigin;
      tipsImgElement.style.transform = `scale(${prop.zoom})`;

      isZoomed = true;
      tipsModalElements[i].classList.remove("visually-hidden");
      tipsModalElements[i].style.opacity = 1;
    }
  });
});

const modalCloseButtonElements =
  document.querySelectorAll(".tips__modal-close");

modalCloseButtonElements.forEach((el) => {
  el.addEventListener("click", () => {
    tipsModalElements.forEach((modalElement) => {
      modalElement.classList.add("visually-hidden");
    });

    tipsImgElement.style.transform = "scale(1)";
  });
});

const challengeButtonElements = document.querySelectorAll(
  ".tips__modal-button--invite"
);

const challengeModalElement = document.querySelector(".tips__challenge");
const challengeTextareaElement = document.querySelector(
  ".tips__challenge-textarea"
);
const copyButtonElement = document.querySelector(".tips__challenge-copy");

challengeButtonElements.forEach((el) => {
  el.addEventListener("click", () => {
    const tipNumber = el.dataset.tip;
    console.log(tipNumber);
    challengeModalElement.style.display = "flex";
    challengeTextareaElement.innerText = challenges[tipNumber - 1];
  });
});

copyButtonElement.addEventListener("click", () => {
  navigator.clipboard.writeText(challengeTextareaElement.innerHTML);
});

const challengeCloseElement = document.querySelector(".tips__challenge-close");
challengeCloseElement.addEventListener("click", () => {
  challengeModalElement.style.display = "none";
});
