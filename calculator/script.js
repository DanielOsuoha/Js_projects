const display = document.getElementById("display");

function appendToDisplay(input){
    display += input;
}

function clear(){
    display = "";
}
function calculate(){
    try{
        display = eval(display);
    }catch(error){
        display = "Error";
    }
}