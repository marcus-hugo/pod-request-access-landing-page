
const form = document.querySelector('form');
const email = document.getElementById('email');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    checkEmail();
});

function checkEmail() {
    const emailValue = email.value;
    if (!isEmail(emailValue)) {
        form.classList = 'error';
    }
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}