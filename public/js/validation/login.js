const loginForm = document.querySelector("#login-form");
const loginName = loginForm.querySelector("[name='loginName']");
const loginPassword = loginForm.querySelector("[name='loginPassword']");

let authLogin = new Authenticate();

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    authLogin.checkEmptyField("loginName", "Yêu cầu nhập tên đăng nhập", loginName);
    authLogin.checkEmptyField("loginPassword", "Yêu cầu nhập mật khẩu", loginPassword);
})