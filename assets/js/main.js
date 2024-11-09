// khai báo biến
const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

const loginPasswordField = document.getElementById("loginPassword");
const loginTogglePassword = document.getElementById("loginTogglePassword");
const registerPasswordField = document.getElementById("registerPassword");
const registerTogglePassword = document.getElementById(
  "registerTogglePassword"
);
// Nút đăng nhập
loginBtn.addEventListener("click", () => {
  loginBtn.style.backgroundColor = "#f15e2c";
  registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

  loginForm.style.left = "50%";
  registerForm.style.left = "-50%";

  loginForm.style.opacity = 1;
  registerForm.style.opacity = 0;

  document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
});
// Nút đăng ký
registerBtn.addEventListener("click", () => {
  loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  registerBtn.style.backgroundColor = "#f15e2c";

  loginForm.style.left = "150%";
  registerForm.style.left = "50%";

  loginForm.style.opacity = 0;
  registerForm.style.opacity = 1;

  document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
});
//Hiện/Ẩn mật khẩu
loginTogglePassword.addEventListener("click", function () {
  const type = loginPasswordField.type === "password" ? "text" : "password";
  loginPasswordField.type = type;
  this.classList.toggle("bx-show");
  this.classList.toggle("bx-hide");
});
registerTogglePassword.addEventListener("click", function () {
  const type = registerPasswordField.type === "password" ? "text" : "password";
  registerPasswordField.type = type;
  this.classList.toggle("bx-show");
  this.classList.toggle("bx-hide");
});
