///ARROW FLASH DISAPEARS AFTER 3 SECONDS
document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            
            const arrow = document.getElementById('arrow')
            arrow.style.display = 'none'
        }, 2000); 
})

// FORM FILLED OUT CORRECT OR INCORRECTLY

const submitButton = document.querySelector('.submitButton');
const emailField = document.querySelector('#exampleInputEmail1');
const message = document.getElementById('emailHelp');

// function formSubmit() {
    
    
    
// }

////SEND MAIL 

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('exampleInputEmail1').value))
  {
   message.innerHTML = '<p id="thanks">Thank You! Welcome to the CMPT community!</p>'
    sendMail();
  } else {
  message.innerHTML = '<p id="sorry">Please enter a valid email address.</p>'}
    
}

function sendMail(params) {
 
    var tempParams = {
        from_name: document.getElementById('exampleInputEmail1').value

    };


    emailjs.send('service_r5mad6o', 'template_nluwv9p', tempParams, 'user_AAoUSCLmjLy7W5KLaf2zg' )
    .then(function(res) {
        console.log('success', res.status);
    })

}

