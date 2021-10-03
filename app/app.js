
const form = document.querySelector('form');
const email = document.getElementById('email');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    checkEmailValue();
});

function checkEmailValue() {
    const emailValue = email.value;
    const small = document.querySelector('small');
    let result = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue);
    
    if (emailValue === '') {
        message('Opps! Please add your email');
        form.classList = 'error';
    } else if (result === false) {
        message('Opps! Please provide a valid email');
        form.classList = 'error';
    } else if (result === true) {
        message('Success!');
        form.classList = 'error';
    }
}

function message(message) {
    const small = document.querySelector('small');
    small.innerText = message;
}