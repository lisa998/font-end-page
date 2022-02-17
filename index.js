let deg = 0;
let startY = 0;
document.addEventListener("scroll", (e) => {
  let scrollHeight = document.documentElement.scrollTop;
  let rotate = (scrollHeight - startY) * 0.1;
  deg += rotate;
  startY = scrollHeight;
  document.querySelector(".circle").style.transform = `rotateZ(${deg}deg)`;
});
