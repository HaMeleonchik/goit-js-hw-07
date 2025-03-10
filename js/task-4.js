const form = document.querySelector(".login-form")
form.addEventListener("submit", formSubmit)

function formSubmit(event){
event.preventDefault()
const elements = event.target.elements;
const info = {
    email: elements.email.value,
    password : elements.password.value
}

if(elements.email.value.trim() === "" || elements.password.value.trim() === ""){
    alert('All form fields must be filled in');
}else{
    console.log(info)
    return event.target.reset();
};
       };


    // style
    const formInput = form.querySelectorAll("input")
    formInput.forEach(input => {
        input.style.border = "1px solid #808080"
        input.style.borderRadius = "4px"
        input.style.width = "360px"
        input.style.padding = "8px 16px 8px"
        input.style.display = "flex";
        input.style.flexDirection = "column";
        input.style.marginTop = "8px"
         input.style.marginBottom = "8px"
    })
    
    const formLabel = form.querySelectorAll("label")

    formLabel.forEach(label => {
        label.style.fontSize = "16px"
        label.style.fontWeight = "400"
        label.style.lineHeight = "1.5"
        label.style.letterSpacing = "0.04em"
        label.style.color = "#2e2f42"
    })

 const formButton = form.querySelector("Button")
 formButton.style.backgroundColor = " #4e75ff";
 formButton.style.borderRadius = " 8px";
 formButton.style.padding = "8px 16px";
 formButton.style.border = "none";
 formButton.style.fontSize = "16px"
 formButton.style.fontWeight = "500"
 formButton.style.lineHeight = "1.5"
 formButton.style.letterSpacing = "0.04em"
 formButton.style.color = "#fff"