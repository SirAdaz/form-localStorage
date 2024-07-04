        // Récupérer le nom
        let nom = localStorage.getItem('nom');
        console.log(nom);

        // récupération du mail
        let adressMail = localStorage.getItem("mail");
        console.log(adressMail);

        document.getElementById("nom").innerHTML = nom;
        document.getElementById("mail").innerHTML = adressMail;