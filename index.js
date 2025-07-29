let btn=document.querySelector("button")
let h1=document.querySelector("h1")
let div=document.querySelector("div")

btn.addEventListener("click", function(){
    let generatecolor=h1.innerText=randomcolor()
    div.style.backgroundColor=generatecolor;
    
})

function randomcolor(){
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
    let color=` rgb(${red},${green},${blue})`
    return color
}