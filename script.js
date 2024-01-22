const tipsImgElement = document.querySelector("#tips-img");

tipsImgElement.addEventListener("click", (e) => {
  if (e.x < e.target.clientWidth / 2) {
    tipsImgElement.style.transformOrigin = "0% 50%";
    console.log("left");
  } else {
    tipsImgElement.style.transformOrigin = "100% 50%";
    console.log("right");
  }

  tipsImgElement.style.transform = "scale(2)";
});
