let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let emailEl = document.getElementById("email");
let confirmPasswordEl = document.getElementById("confirmPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
let updateBtnEl = document.getElementById("updateBtn");

function validateFields() {
    let emailValue = emailEl.value;
    let confirmPasswordValue = confirmPasswordEl.value;
    if (emailValue === "yammanurusubramanyamsastry@gmail.com" && confirmPasswordValue === "12345") {
        confirmPasswordErrMsgEl.textContent = "Login Success";
    } else {
        confirmPasswordErrMsgEl.textContent = "Enter correct credentials";
    }
}

function validateNewPassword() {
    if (emailEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
}

emailEl.addEventListener("blur", validateNewPassword);

confirmPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confirmPasswordErrMsgEl.textContent = "Required*";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
});

updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateFields();
});