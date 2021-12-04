///ARROW FLASH DISAPEARS AFTER 3 SECONDS
document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            
            const arrow = document.getElementById('arrow')
            arrow.style.display = 'none'
        }, 3000); 
})

// FORM FILLED OUT CORRECT OR INCORRECTLY

const submitButton = document.querySelector('.submitButton');
const emailField = document.querySelector('.emailField');
const message = document.getElementById('emailHelp');

// function formSubmit() {
    
//     message.innerHTML = '<p id="thanks">Thank you! Welcome to the Crumpet Community! #CMPT</p>'
    
// }