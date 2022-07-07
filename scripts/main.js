var head = document.getElementById("header");
var boton = document.getElementById("boton");
var display = document.getElementById("display");
//cards----------------------------------------
var card_1 = document.getElementById("card_1");
var card_2 = document.getElementById("card_2");
var card_3 = document.getElementById("card_3");
var card_4 = document.getElementById("card_4");
var card_5 = document.getElementById("card_5");
var card_6 = document.getElementById("card_6");
var card_7 = document.getElementById("card_7");
var cards = document.getElementsByClassName("card");
var card_description = document.getElementById("card_description");
var c_name = document.getElementById("name");
//---------------------------------------------
//control--------------------------------------
var i = 0; 
var c = 0;
var pos = 0;
var j = 0;
//---------------------------------------------
function changeMode() {
    boton.style.transform = "translateX(28px)";
    document.body.style.background = "#292929";
}
function changeMode2() {
    boton.style.transform = "translateX(0%)";
    document.body.style.background = "white";
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
function display_menu() {
    if (c==0) {
        display.style.transitionDuration = "0.6s"
        display.style.clipPath = "inset(0% 0% 0% 0%)";
        return c = 1;
    } else if (c>0) {
        display.style.transitionDuration = "0.6s"
        display.style.clipPath =  "inset(0% 0% 100% 0%)";
        return c = 0;
    }
}
function display_card(x) {
    if (j == 0) {
    x.style.transitionDuration = "0.8s";
    x.style.width = "80%";
    card_description.style.visibility = "visible";
    card_description.style.top = "100px";
    card_description.style.left = "450px";
    c_name.style.left = "550px";
    c_name.style.visibility = "visible";
    c_name.style.top = "-20px";
    return j = 1;
    } else if( j > 0) {
        x.style.transitionDuration = "0.8s";
        x.style.width = "300px";
        card_description.style.visibility = "hidden";
        return j = 0;
    }
}




document.getElementById("container").onclick = function() {
    general();
};
document.getElementById("menu").onclick = function() {
    display_menu();
};
console.log(cards);
document.getElementById("card_1").onclick = function()  {
    display_card(card_1);
}
document.getElementById("card_2").onclick = function()  {
    display_card(card_2);
}
document.getElementById("card_3").onclick = function()  {
    display_card(card_3);
}
document.getElementById("card_4").onclick = function()  {
    display_card(card_4);
}
document.getElementById("card_5").onclick = function()  {
    display_card(card_5);
}
document.getElementById("card_6").onclick = function()  {
    display_card(card_6);
}
document.getElementById("card_7").onclick = function()  {
    display_card(card_7);
}

