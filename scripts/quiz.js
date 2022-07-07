var quiz_container = document.getElementById("quiz_container")
var boton = document.getElementById("boton");
var menu = document.getElementById("menu");
var barritas = document.getElementById("barritas")
var display = document.getElementById("display");
var input_name = document.getElementById("input_name");
var quiz = document.getElementById("quiz")
let participants = []

function changeMode() {
    boton.style.transform = "translateX(28px)";
    quiz_container.style.background = "#292929";
    head.style.backgroundColor = "#292929";
    head.style.borderColor = "grey";
    head.style.color = "grey";
    display.style.backgroundColor = "#292929";
}
function changeMode2() {
    boton.style.transform = "translateX(0%)";
    quiz_container.style.background = "white";
    head.style.backgroundColor = "white";
    head.style.borderColor = "black";
    head.style.color = "black";
    display.style.backgroundColor = "white";
}
function general() {
    if (i==0) {
        changeMode();
        return i = 1;
    } else if (i>0) {
        changeMode2();
        return i = 0;
    }        
}
function next_question() {
    quiz.style.fill = "white";
}
function Enter(e){
    if(e.keyCode === 13) {
        var aux = input_name.value;
        console.log(aux); 
        next_question();
    }
}
document.getElementById("container").onclick = function() {
    general();
};

