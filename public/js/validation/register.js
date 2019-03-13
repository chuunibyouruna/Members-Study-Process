const registerForm = document.querySelector("#register-form");
const registerFullName = registerForm.querySelector("[name='full_name']");
const registerName = registerForm.querySelector("[name='user_name']");
const registerPassword = registerForm.querySelector("[name='password']");
const registerConfirmPass = registerForm.querySelector("[name='confirm_password']");

let authRegister = new Validator();


registerFullName.addEventListener("keyup", function (e) {
    let checkEmptyFullName =
        authRegister.checkEmptyField("registerFullName", messages.EMPTY_NAME, registerFullName);

    if (checkEmptyFullName) {
        let checkFullNameLength = authRegister.checkTextLength("registerFullName", messages.GET_FIELD_LENGTH(5, 30), registerFullName, 5, 30);
    }
})

registerName.addEventListener("keyup", function (e) {
    let checkSpecial;
    let checkEmptyUserName = authRegister.checkEmptyField("registerName", messages.EMPTY_USER_NAME, registerName);
    if (checkEmptyUserName) {
        checkSpecial = authRegister.checkSpecialCharacters("registerName", messages.CHECK_SPECIAL_CHARCTERS, registerName);
    }
    if (checkSpecial) {
        authRegister.checkTextLength("registerName", messages.GET_FIELD_LENGTH(6, 30), registerName, 6, 30);
    }
});

registerPassword.addEventListener("keyup", function (e) {
    let checkSpecial;
    let checkEmptyPassword = authRegister.checkEmptyField("registerPassword", messages.EMPTY_PASSWORD, registerPassword);
    if (checkEmptyPassword) {
        checkSpecial = authRegister.checkSpecialCharacters("registerPassword", messages.CHECK_SPECIAL_CHARCTERS, registerPassword);
    }
    if (checkSpecial) {
        authRegister.checkTextLength("registerPassword", messages.GET_FIELD_LENGTH(6, 30), registerPassword, 6, 30);
    }
});

registerConfirmPass.addEventListener("keyup", function (e) {
    let checkEmptyPassword =
        authRegister.checkEmptyField("registerConfirmPass", messages.EMPTY_COFIRM_PASSWORD, registerConfirmPass);
    if (checkEmptyPassword) {
        authRegister.compareToFirstPassword("registerConfirmPass", messages.COMPARE_PASSWORD, registerPassword, registerConfirmPass);
    }
})


registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    authRegister.checkEmptyField("registerFullName", messages.EMPTY_NAME, registerFullName);
    authRegister.checkEmptyField("registerName", messages.EMPTY_USER_NAME, registerName);
    authRegister.checkEmptyField("registerPassword", messages.EMPTY_PASSWORD, registerPassword);
    authRegister.checkEmptyField("registerConfirmPass", messages.EMPTY_COFIRM_PASSWORD, registerConfirmPass);
    if (!Object.keys(authRegister.errors).length) {
        let newUser = {
            user_name: registerName.value,
            password: registerPassword.value,
            full_name: registerFullName.value,
            dob: null,
            school: null,
            address: null,
            phone_number: null,
            avatar: null // this will remove in near future
        }
        fetch("http://localhost:3000/auth/register",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(newUser)
            })
            .then(function (res) { console.log(res.data) })
            .catch(function (res) { console.log(res.response) })
    }
})
