document.getElementById("button-link").addEventListener("click", () => {
  document.getElementById("login-sec").classList.toggle("login-2");
});

document.getElementById("close-icon").addEventListener("click", () => {
  document.getElementById("login-sec").classList.remove("login-2");
  document.getElementById("signup-sec").classList.remove("signup-2");
});

document.getElementById("sg-cl").addEventListener("click", () => {
  document.getElementById("login-sec").classList.remove("login-2");
  document.getElementById("signup-sec").classList.add("signup-2");
});

document.getElementById("close-icon-2").addEventListener("click", () => {
  document.getElementById("signup-sec").classList.remove("signup-2");
});
document.getElementById("lg-cl").addEventListener("click", () => {
  document.getElementById("login-sec").classList.add("login-2");
  document.getElementById("signup-sec").classList.remove("signup-2");
});

var form = document.getElementById("formId");
function submitForm(event) {
  //Preventing page refresh
  event.preventDefault();
}
form.addEventListener("submit", submitForm);
