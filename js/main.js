
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


const firstNameHolder = document.querySelector('#first_name_holder');
const lastNameHolder = document.querySelector('#last_name_holder');
const emailHolder = document.querySelector('#email_holder');
const passwordHolder = document.querySelector('#password_holder');

const claimBtn = document.querySelector('#claim_btn');

emailHolder.addEventListener('click', () => {
    console.log("vzhzdgn");
})

claimBtn.addEventListener('click', () => {
    if (firstName.value === ""){
        if (!firstNameHolder.classList.contains("text_error")) {
            firstNameHolder.classList.add("text_error");
        }
    }else {
        if (firstNameHolder.classList.contains("text_error")) {
            firstNameHolder.classList.remove("text_error");
        }
    }
    if (lastName.value === ""){
        if (!lastNameHolder.classList.contains("text_error")) {
            lastNameHolder.classList.add("text_error");
        }
    }else {
        if (lastNameHolder.classList.contains("text_error")) {
            lastNameHolder.classList.remove("text_error");
        }
    }
    let emailAddress = email.value.toString();
    console.log(emailAddress);
    if (emailAddress.includes('@') && !emailAddress.includes('/') && !emailAddress.includes('#') && !emailAddress.includes('$') &&  !emailAddress.includes('&')) {
        console.log(`${emailAddress} is valid`);
        if (emailHolder.classList.contains("text_error")) {
            emailHolder.classList.remove("text_error");
        }
    } else {
        console.log(`${emailAddress} is not valid`);
        if (!emailHolder.classList.contains("text_error")) {
            emailHolder.classList.add("text_error");
        }
    }
    if (password.value === ""){
        if (!passwordHolder.classList.contains("text_error")) {
            passwordHolder.classList.add("text_error");
        }
    }else {
        if (passwordHolder.classList.contains("text_error")) {
            passwordHolder.classList.remove("text_error");
        }
    }
    console.log(password.value);
});