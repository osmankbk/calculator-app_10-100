//IIFE
( () => {
//My variables
const buttonContainer = document.querySelector('.buttons');
const inputDisplay = document.querySelector('.screen');
const buttons = buttonContainer.querySelectorAll('.btn');
//Looped through the buttons & add a click event to each one of em
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.num;
        if(e.target.classList.contains('btn')){
            inputDisplay.value += value;
        }
    })
})
//Used event bubbling on the container to give the 'clear' & 'equal' button click events.
buttonContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-clear')) {
        inputDisplay.value = '';
    } else {
        if(e.target.classList.contains('btn-equal')) {
            if(inputDisplay.value === ''){
                inputDisplay.value = "Please Enter A Calculation";
            }
            inputDisplay.value = eval(inputDisplay.value);
        }
    }
})
})();



