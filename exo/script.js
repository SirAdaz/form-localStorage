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
        showError(firstName, `le prénom doit être compris entre ${min} et ${max} caractères.`)
    } else {
        showSuccess(firstName);
        valid = true;
   }
   return valid;
}
const checkUserLastName= () => {
    let valid = false;
    const min = 3;
    const max = 25;
    const userLastName = lastName.value.trim();
    if (!isRequired(userLastName)) {
        showError(lastName, "Le champ ne peut pas être vide");
    } else if (!isBetween(userLastName.length, min, max)) {
        showError(lastName, `le nom doit être compris entre ${min} et ${max} caractères.`);
    } else {
        showSuccess(lastName);
        valid = true;
   }
   return valid;
}
const checkUserEmail= () => {
    let valid = false;
    const userEmail = email.value.trim();
    if (!isRequired(userEmail)) {
        showError(email, "Le champ ne peut pas être vide");
    } else if (!isEmailValid(userEmail)) {
        showError(email, "L'adresse mail ne peut être valide")
    } else {
        showSuccess(email);
        valid = true;
   }
   return valid;
}
const checkUserPassword= () => {
    let valid = false;
    const userPassword = password.value.trim();
    if (!isRequired(userPassword)) {
        showError(password, "Le champ ne peut pas être vide");
    } else if (!isPasswordSecure(userPassword)) {
        showError(password, 'Le mot de passe doit avoir au moins 8caractères, il doit comporter une minuscule,une majuscule, un chiffre et uncaractère spécial parmi les suivants (!@#$%^&*)')
    } else {
        showSuccess(password);
        valid = true;
   }
   return valid;
}
const checkUserConfirmPassword= () => {
    let valid = false;
    const userConfirmPassword = confirmPassword.value.trim();
    const userPassword = password.value.trim();
    if (!isRequired(userConfirmPassword)) {
        showError(confirmPassword, "Le champ ne peut pas être vide");
    } else if (userPassword !== userConfirmPassword) {
        showError(confirmPassword, "La confirmation n'est pas bonne")
    } else {
        showSuccess(confirmPassword);
        valid = true;
   }
   return valid;
}

form.addEventListener("submit" ,function(e){
    e.preventDefault();
    let isFirstNameValid = checkUserFirstName();
    let isLastNameValid = checkUserLastName();
    let isEmailValid = checkUserEmail();
    let isPasswordValid = checkUserPassword();
    let isConfirmPasswordValid = checkUserConfirmPassword();
    let isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
    if (isFormValid==false) {
        e.preventDefault();
        alert("t'es nul")
    } else {
        alert("bien ouéj")
    }
    let userFirstNameVal = document.getElementById("firstName").value;
    let userLastNameVal = document.getElementById("lastName").value;
    let userEmailVal = document.getElementById("email").value;
    localStorage.setItem("prenom", userFirstNameVal);
    localStorage.setItem("nom", userLastNameVal);
    localStorage.setItem("mail", userEmailVal); 
});