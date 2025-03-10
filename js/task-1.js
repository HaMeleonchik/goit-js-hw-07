const categoriesUl = document.querySelector("#categories");
const categoriesLi = categoriesUl.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesLi.length}`);

categoriesLi.forEach(categorie => {
    const categoriesText = categorie.querySelector("h2").textContent;
    const categoriesElement = categorie.querySelectorAll("ul li");
 console.log(`Category: ${categoriesText}`);
 console.log(`Elements:  ${categoriesElement.length}`);
});
// style



// basic
const categorieStyleUl = categoriesUl.querySelectorAll("ul, li");
categorieStyleUl.forEach(ul =>{
    ul.style.listStyleType = "none";
    ul.style.margin = "0";
    ul.style.padding = "0";
})
// h2
const categoriesh2 = categoriesUl.querySelectorAll("h2");
categoriesh2.forEach(h2 =>{
h2.style.fontSize = "24px"
h2.style.fontWeight = "600"
h2.style.lineHeight = "1.33"
h2.style.letterSpacing = "0.04em"
h2.style.color = "#2e2f42"
h2.style.paddingBottom = "16px"
h2.style.margin = "0" 
});

// li
categoriesLi.forEach(li =>{
li.style.backgroundColor = "#f6f6fe"
li.style.borderRadius = "8px"
li.style.padding = "16px"
li.style.width = "392px"
li.style.marginBottom = "24px"
// last-Child
const categoriesLastLi = categoriesUl.querySelectorAll("li:last-child");
categoriesLastLi.forEach(li => {
li.style.marginBottom = "0"
});



// ChildLi
});
const categoriesChildLi = categoriesUl.querySelectorAll("ul li ul li");
categoriesChildLi.forEach( li => {
li.style.fontWeight = "400"
li.style.lineHeight = "1.5"
li.style.letterSpacing = "0.04em"
li.style.color = "#2e2f42"
li.style.border = "1px, solid, #808080"
li.style.borderRadius = "4px"
li.style.width  = "360px"
li.style.padding = "8px 16px 8px"
li.style.marginBottom = "8px"
});
// ChildLi-last-child
const categoriesLastChildLi = categoriesUl.querySelectorAll("ul li ul li:last-child");
categoriesLastChildLi.forEach(li => {
li.style.marginBottom = "0"
});

