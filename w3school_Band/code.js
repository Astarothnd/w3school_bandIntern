
var Buttons = document.getElementsByClassName("ticket-buy");
var panel = document.getElementsByClassName("ticketModel")[0];
var container = document.getElementsByClassName("Model-container")[0];

for(var num = 0; num <Buttons.length ; num ++ ){
    Buttons[num].onclick = function(){
        panel.classList.add("open");
    }
}

panel.onclick = function(){
    panel.classList.remove("open");
}
container.onclick = function(event){
    event.stopPropagation();
}

document.getElementsByClassName("Model-exit-text")[0].onclick = function(){
    panel.classList.remove("open");
}
document.getElementsByClassName("Model-exit-button")[0].onclick = function(){
    panel.classList.remove("open");
}