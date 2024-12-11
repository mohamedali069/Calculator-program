const display =document.getElementById("display");



function appendToDisplay(input){
    display.value += input;
}



function calculate(){
    // to catch errors
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value= "error";
    }

}


function clearDisplay(){
    display.value = "";
}