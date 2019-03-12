const loginForm = document.querySelector("#login-form");
const loginName = loginForm.querySelector("[name='loginName']");
const loginPassword = loginForm.querySelector("[name='loginPassword']");

let authLogin = new Validator();

loginName.addEventListener("keyup", function (e) {
    let checkSpecial;
    let checkEmptyUserName = authLogin.checkEmptyField("loginName", messages.EMPTY_USER_NAME, loginName);
    if (checkEmptyUserName) {
        checkSpecial = authLogin.checkSpecialCharacters("loginName", messages.CHECK_SPECIAL_CHARCTERS, loginName);
    }
    if (checkSpecial) {
        authLogin.checkTextLength("loginName", messages.GET_FIELD_LENGTH(6, 30), loginName, 6, 30);
    }
});

loginPassword.addEventListener("keyup", function (e) {
    let checkSpecial;
    let checkTemptyPass = authLogin.checkEmptyField("loginPassword", messages.EMPTY_PASSWORD, loginPassword);
    if (checkTemptyPass) {
        checkSpecial = authLogin.checkSpecialCharacters("loginPassword", messages.CHECK_SPECIAL_CHARCTERS, loginPassword)
    }
    if (checkSpecial) {
        authLogin.checkTextLength("loginPassword", messages.GET_FIELD_LENGTH(6, 30), loginPassword, 6, 30);
    }
})

loginForm.addEventListener("submit", function (e) {
    e.preventDefault()
    authLogin.checkEmptyField("loginName", messages.EMPTY_USER_NAME, loginName);
    authLogin.checkEmptyField("loginPassword", messages.EMPTY_PASSWORD, loginPassword);
    if (!Object.keys(authLogin.errors).length) {
        let loginUser = {
            user_name: loginName.value,
            password: loginPassword.value,
        }
        fetch("http://localhost:3000/auth/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(loginUser)
            })
            .then(function (res) { console.log(res.data) })
            .catch(function (res) { console.log(res.response) })
    }
})