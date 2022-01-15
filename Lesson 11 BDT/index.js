const container = document.getElementById("container");
const changeColor = document.getElementById("changeColor");
const returnColor = document.getElementById("returnColor");

changeColor.onclick = function(){
    container.style.backgroundColor = "green";
}
returnColor.onclick = function(){
    container.style.backgroundColor = "white";
}