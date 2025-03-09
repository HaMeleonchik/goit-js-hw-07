function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const buttonChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", changeColor);
function changeColor() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}
// style
//           buttonChange
buttonChangeColor.style.backgroundColor = "#4e75ff"
buttonChangeColor.style.borderRadius = "8px"
buttonChangeColor.style.padding = "8px 16px"
buttonChangeColor.style.fontSize = "16px"
buttonChangeColor.style.fontWeight = "500"
buttonChangeColor.style.lineHeight = "1.5"
buttonChangeColor.style.letterSpacing = "0.04em"
buttonChangeColor.style.color = "#fff"
buttonChangeColor.style.border = "none"
//             spanColor
spanColor.style.fontSize = "16px"
spanColor.style.fontWeight = "400"
spanColor.style.lineHeight = "1.5"
spanColor.style.letterSpacing = "0.04em"
spanColor.style.color = "#2e2f42"
//           widgetDiv
const widgetDiv = document.querySelector(".widget");
widgetDiv.style.textAlign = "center"