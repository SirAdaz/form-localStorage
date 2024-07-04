const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("signupForm")

const isRequired = value => value === "" ? false : true;
const isBetween =(length,min,max) => length<min || length>max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message)=>{
    const formField = input.parentElement;
    formField.classList.remove("success")
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.textContent = message;
}
const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
    const error = formField.querySelector("small");
    error.textContent = "";
}
const checkUserFirstName= () => {
    let valid = false;
    const min = 3;
    const max = 25;
    const userFirstName = firstName.value.trim();
    if (!isRequired(userFirstName)) {
        showError(firstName, "Le champ ne peut pas être vide");
    } else if (!isBetween(userFirstName.length, min, max)) {
        showError(firstName, "le nom doit être compris entre ${min} et ${max} caractères.")
    } else {
        showSuccess(firstName);
        valid = true;
   }
   return valid
}
const checkEmail= () => {
    let valid = false;
    const userEmail = email.value.trim();
    if (!isRequired(userEmail)) {
        showError(email, "Le champ ne peut pas être vide");
    } else if (!isBetween(userEmail.length, min, max)) {
        showError(email, "L'adresse mail ne peut être valide")
    } else {
        showSuccess(email);
        valid = true;
   }
   return valid
}