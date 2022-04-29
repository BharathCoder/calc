// JS Project #2
// Variables
let screen = document.getElementById('myText')
let buttons = document.querySelectorAll('button')
let screenValue = '';
// For Loop
for (item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log("btn  text is", buttonText)
        if (buttonText == 'X') {
            buttonText = '*'
            screenValue += buttonText
            screen.value = screenValue
        }
        else if (buttonText =='=') {
            screen.value =  eval(screenValue)
        }
        else if (buttonText =='C') {
            screenValue = "";
            screen.value = screenValue ;
        }
        else{
            screenValue += buttonText
            screen.value = screenValue
        }
    });
    
}
;