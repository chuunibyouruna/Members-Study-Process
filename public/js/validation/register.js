const registerForm = document.querySelector("#register-form");
const registerFullName = registerForm.querySelector("[name='registerFullName']");
const registerName = registerForm.querySelector("[name='registerName']");
const registerPassword = registerForm.querySelector("[name='registerPassword']");
const confirmPassword = registerForm.querySelector("[name='confirmPassword']");

let authRegister = new Validator();

registerFullName.addEventListener("keyup", function (e) {
    authRegister.checkEmptyField("registerFullName", messages.EMPTY_NAME, registerFullName);
})

registerName.addEventListener("keyup", function (e) {
    let checkEmptyUserName = authRegister.checkEmptyField("registerName", messages.EMPTY_USER_NAME, registerName);
    if (checkEmptyUserName) {
        authRegister.checkSpecialCharacters("registerName", messages.CHECK_SPECIAL_CHARCTERS, registerName);
    }
})

registerPassword.addEventListener("keyup", function (e) {
    let checkEmptyPassword = authRegister.checkEmptyField("registerPassword", messages.EMPTY_PASSWORD, registerPassword);
    if (checkEmptyPassword) {
        authRegister.checkSpecialCharacters("registerPassword", messages.CHECK_SPECIAL_CHARCTERS, registerPassword);
    }
})

confirmPassword.addEventListener("keyup", function (e) {
    let checkEmptyPassword = authRegister.checkEmptyField("confirmPassword", messages.EMPTY_COFIRM_PASSWORD, confirmPassword);
    if (checkEmptyPassword) {
        authRegister.compareToFirstPassword("confirmPassword", messages.COMPARE_PASSWORD, registerPassword, confirmPassword);
    }
})


registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    authRegister.checkEmptyField("registerFullName", messages.EMPTY_NAME, registerFullName);
    authRegister.checkEmptyField("registerName", messages.EMPTY_USER_NAME, registerName);
    authRegister.checkEmptyField("registerPassword", messages.EMPTY_PASSWORD, registerPassword);
    authRegister.checkEmptyField("confirmPassword", messages.EMPTY_COFIRM_PASSWORD, confirmPassword);
})
