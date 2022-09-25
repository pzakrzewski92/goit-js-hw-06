function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyBackground = document.querySelector("body");
const changeBtn = bodyBackground.querySelector(".change-color")
const color = bodyBackground.querySelector(".color")

const changeBgColor = () => {
  bodyBackground.style.backgroundColor = `${getRandomHexColor()}`;
  color.textContent = `${getRandomHexColor()}`;
};

changeBtn.addEventListener("click", changeBgColor);