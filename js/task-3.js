const userName = document.querySelector("#name-input");
const NameSpan = document.querySelector("#name-output");

userName.addEventListener("input", HelloName);

function HelloName(event){
const trimText = event.target.value.trim();
if(trimText === ""){
 NameSpan.textContent = `Anonymous`
} else{
    NameSpan.textContent = `${event.target.value}`.trim();
};
};

userName.style.width = "360px"
userName.style.padding = "8px 16px 8px"
userName.style.marginBottom = "16px"
userName.style.marginBottom = "16px"
userName.style.borderRadius = "4px"
userName.style.border = "1px solid #808080"

const NameTitle = document.querySelector("h1")

NameTitle.style.color = "tomato"
NameTitle.style.fontSize = "24px"
NameTitle.style.fontWeight = "600"
NameTitle.style.lineHeight = "1.33"
NameTitle.style.letterSpacing = "0.04em"
NameTitle.style.color = "#2e2f42"
NameTitle.style.margin = "0" 

