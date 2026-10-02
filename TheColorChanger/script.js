const title = document.querySelector("#title");
const btn = document.querySelector("#colorButton");
btn.addEventListener("click",function()
{title.textContent = "You changed me!";
    title.style.color = "blue";
}); 
