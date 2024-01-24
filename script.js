const imgsCoords = [
  { x0: 0, x1: 0.203, y0: 0, y1: 0.41 },
  { x0: 0.765, x1: 1, y0: 0, y1: 0.455 },
];
const transformOrigins = ["0% 0%", "100% 0%"];
const tipsImgElement = document.querySelector("#tips-img");
const tipsModalElement = document.querySelector(".tips__modal");

let isZoomed = false;
tipsImgElement.addEventListener("click", (e) => {
  if (isZoomed) {
    tipsImgElement.style.transform = "scale(1)";
    return;
  }

  const xPercent = e.offsetX / e.target.clientWidth;
  const yPercent = e.offsetY / e.target.clientHeight;

  // console.log(xPercent, imgsCoords[0].x1);
  // console.log(yPercent, imgsCoords[0].y1);

  imgsCoords.forEach(({ x0, x1, y0, y1 }, i) => {
    if (xPercent >= x0 && xPercent <= x1 && yPercent >= y0 && yPercent <= y1) {
      tipsImgElement.style.transformOrigin = transformOrigins[i];
      tipsImgElement.style.transform = "scale(2)";
      isZoomed = true;
      tipsModalElement.style.opacity = 1;
    }
  });

  // if (e.x < e.target.clientWidth / 2) {
  //   tipsImgElement.style.transformOrigin = "0% 50%";
  //   console.log("left");
  // } else {
  //   tipsImgElement.style.transformOrigin = "100% 50%";
  //   console.log("right");
  // }

  // tipsImgElement.style.transform = "scale(2)";
});
