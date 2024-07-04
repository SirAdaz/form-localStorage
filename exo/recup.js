let prenom = localStorage.getItem("prenom");
let nom = localStorage.getItem("nom");
let mail = localStorage.getItem("mail");
document.getElementById("prenom").innerText = prenom;
document.getElementById("nom").innerText = nom;
document.getElementById("mail").innerText = mail;