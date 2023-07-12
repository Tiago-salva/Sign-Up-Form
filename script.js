const form = document.getElementById("myForm");
const errorMessage = document.querySelectorAll(".error-message");
const errorMessageThree = document.getElementById("error-3");
const errorMessageFour = document.getElementById("error-4");
const errorMessageFive = document.getElementById("error-5");
const errorMessageSix = document.getElementById("error-6");
const allName = document.querySelectorAll(".name");
const userEmail = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const userPwd = document.getElementById("user-pwd");
const userPwdConfirm = document.getElementById("user-pwd-confirm");


allName.forEach((inputName) => {
    inputName.addEventListener("keyup", () => {
        const actualMessage = inputName.nextElementSibling.nextElementSibling;

        const hasNumbers = /[0-9]/.test(inputName.value);

        (hasNumbers) ? actualMessage.textContent = "*Please enter just letters" : actualMessage.textContent = "";
    });
});


userEmail.addEventListener("keyup", () => {
    (userEmail.value.includes("@hotmail.com")) || (userEmail.value.includes("@gmail.com")) ? errorMessageThree.textContent = "" : errorMessageThree.textContent = "*Please provide a valid email"
});

userPwd.addEventListener("keyup", () => {
    userPwd.value.length >= 8 ? errorMessageFive.textContent = "" : errorMessageFive.textContent = "*Password requires minimum 8 characters";
});

userPwdConfirm.addEventListener("keyup", () => {
    userPwdConfirm.value === userPwd.value ? errorMessageSix.textContent = "" : errorMessageSix.textContent = "*Password did not match" ;
});