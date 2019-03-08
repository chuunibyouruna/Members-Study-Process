const loginForm = document.querySelector("#login-form");
const loginName = loginForm.querySelector("[name='loginName']");
const loginPassword = loginForm.querySelector("[name='loginPassword']");

let authLogin = new Validator();

loginName.addEventListener("keyup", function (e) {
    let checkEmptyUserName = authLogin.checkEmptyField("loginName", messages.EMPTY_USER_NAME, loginName);
    if (checkEmptyUserName) {
        authLogin.checkSpecialCharacters("loginName", messages.CHECK_SPECIAL_CHARCTERS, loginName);
    }
});

loginPassword.addEventListener("keyup", function (e) {
    let checkTemptyPass = authLogin.checkEmptyField("loginPassword", messages.EMPTY_PASSWORD, loginPassword);
    if (checkTemptyPass) {
        authLogin.checkSpecialCharacters("loginPassword", messages.CHECK_SPECIAL_CHARCTERS, loginPassword)
    }
})

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    authLogin.checkEmptyField("loginName", messages.EMPTY_USER_NAME, loginName);
    authLogin.checkEmptyField("loginPassword", messages.EMPTY_PASSWORD, loginPassword);
})