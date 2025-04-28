const passwordButton = document.querySelector('.passwordButton');
const input = document.querySelector('input');
const faCopy = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alertContainer');

passwordButton.addEventListener('click', createPassword);

faCopy.addEventListener('click', coppyPassword);

function createPassword() {
    const passwordLength = 14;
    const characters = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // console.log(characters[8]);
    let password = '';

    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }

    input.value = password;

}

function coppyPassword() {
    if (input.value) {
        input.select();
        navigator.clipboard.writeText(input.value);
        alertContainer.classList.remove('active');
        alertContainer.textContent = input.value + ' kopyalandı';
        setTimeout(() => {
            alertContainer.classList.add('active');
        }, 2000)
    }

}