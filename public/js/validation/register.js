const registerForm = document.querySelector("#register-form");
const registerFullName = registerForm.querySelector("[name='registerFullName']");
const registerName = registerForm.querySelector("[name='registerName']");
const registerPassword = registerForm.querySelector("[name='registerPassword']");
const confirmPassword = registerForm.querySelector("[name='confirmPassword']");

let authRegister = new Authenticate();

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    authRegister.checkEmptyField("registerFullName", "Yêu cầu nhập họ tên", registerFullName);
    authRegister.checkEmptyField("registerName", "Yêu cầu nhập tên đăng nhập", registerName);
    authRegister.checkEmptyField("registerPassword", "Yêu cầu nhập mật khẩu", registerPassword);
    authRegister.checkEmptyField("confirmPassword", "Yêu cầu nhập mật khẩu xác nhận", confirmPassword);
})
