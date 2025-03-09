function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton =  document.querySelector("[data-create]")
const destroyButton =  document.querySelector("[data-destroy]")
const amountInput = document.querySelector("input[type=number]")
const box = document.querySelector("#boxes")
// create
createButton.addEventListener("click", createButtonClick);
function createButtonClick(){
  let amountInputValue = amountInput.value;
  if(amountInputValue >= 1 && amountInputValue <= 100){
    box.innerHTML = createBoxes(amountInputValue);
  }

};
function createBoxes(amount){
  let generatedBoxes = "";
  let firtsWidthBox = 30;
  let firtsHeightBox = 30;
  for(let i = 0; i < amount; i++) {
    let widthBox = firtsWidthBox+i*10;
    let heightBox = firtsHeightBox+i*10;
    let colorRandom = getRandomHexColor();
    generatedBoxes += `<div style="background-color:${colorRandom};width:${widthBox}px;height:${heightBox}px"></div>`;
  }
  return generatedBoxes;
}
// destroy
destroyButton.addEventListener("click", destroyButtonClick);
function destroyButtonClick(){
  box.innerHTML = "";
  amountInput.value = "";
};


//style 

//         controlsDiv
const controlsDiv = document.querySelector("#controls")
controlsDiv.style.marginBottom = "80px"

//          box
box.style.display ="flex";
box.style.gap ="48px";
box.style.flexWrap ="wrap";
box.style.flexDirection = "row";
//      CreateBut
createButton.style.backgroundColor = "#4e75ff"
createButton.style.borderRadius = "8px"
createButton.style.padding = "8px 32px"
createButton.style.border = "none"
createButton.style.fontSize = "16px"
createButton.style.fontWeight = "500"
createButton.style.lineHeight = "1.5"
createButton.style.letterSpacing = "0.04em"
createButton.style.color = "#fff"
createButton.style.marginLeft = "16px"

//      DestroyBut
destroyButton.style.backgroundColor = "#ff4e4e"
destroyButton.style.borderRadius = "8px"
destroyButton.style.padding = "8px 27px"
destroyButton.style.border = "none"
destroyButton.style.fontSize = "16px"
destroyButton.style.fontWeight = "500"
destroyButton.style.lineHeight = "1.5"
destroyButton.style.letterSpacing = "0.04em"
destroyButton.style.color = "#fff"
destroyButton.style.marginLeft = "16px"

//  input
amountInput.style.border = " 1px solid #808080";
amountInput.style.borderRadius = "8px";
amountInput.style.paddingLeft = "72px";
amountInput.style.width = "150px";
amountInput.style.height = "40px";
amountInput.style.fontSize = "16px"
amountInput.style.fontWeight = "400"
amountInput.style.lineHeight = "1.5"
amountInput.style.letterSpacing = "0.04em"
amountInput.style.color = "#2e2f42"
