function showLoop() {

    var text = document.getElementById("text");
    text.innerHTML="Hello JavaScript Loops?";

    var fruits = ["Mango", "Banana", "Grape", "Avocado", "Strawberry"];

    var content = "";

    fruits.forEach(fruit=>{
        content+=fruit+"<br>";
    });
    var fruitsItem = document.getElementById("fruitsItem").innerHTML=content;

    var showLoop = document.getElementById("showLoop");
    showLoop.setAttribute("id", "hideLoop");
    showLoop.setAttribute("onClick", "hideLoop()");
    showLoop.innerHTML="Hide Loop";

}

function hideLoop() {
    // var hiddenText = document.getElementById("hiddenText").innerHTML="The hidden button is clicked";
    var text = document.getElementById("text");
    text.innerHTML="";
    var fruitsItem = document.getElementById("fruitsItem").innerHTML='';

    var hideLoop = document.getElementById("hideLoop");
    hideLoop.setAttribute("id", "showLoop");
    hideLoop.setAttribute("onClick", "showLoop()");
    hideLoop.innerHTML="Show Loop";
}

function color() {
    var color = document.getElementById("color");
    // color.setAttribute("class", "colorAfter");
    color.classList.toggle("colorBefore");
    color.classList.toggle("colorAfter");
}