const imageSmall = document.querySelector(".image--small");
const imageZoomed = document.querySelector(".image--zoomed");
const imageMouse = document.querySelector(".image--mouse");

const imageZoomedWidth = 800;
const imageZoomedHeight = 600;
const imageMouseWidth = 40;
const imageMouseHeight = 43;
const imageSmallWidth = 300;
const imageSmallHeight = 225;
const ratioX = imageZoomedWidth / imageSmallWidth;
const ratioY = imageZoomedHeight / imageSmallHeight;

let mouseEndX = 0;
let mouseEndY = 0;
const mouseStartX = imageZoomedWidth - imageMouseWidth;
const mouseStartY = imageZoomedHeight - imageMouseHeight;

imageSmall.addEventListener("mousemove", (e) => {
  console.log(mouseStartX - e.clientY * ratioX);
  if (mouseStartX - e.clientY * ratioX === mouseStartX - imageMouseWidth)
    return;
  imageMouse.style.right = `${mouseStartX - e.clientX * ratioX}px`;
  imageMouse.style.bottom = `${mouseStartY - e.clientY * ratioY}px`;
});
