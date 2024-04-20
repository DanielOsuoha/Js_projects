const display = document.getElementById('display');
console.log(display)
function appendToDisplay(input){
    display.value += input;
}

function clear(){
    display.value = ''
}
function calculate(){
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = "Error"
    }
}