        // // Récupérer le nom
        // let nom = localStorage.getItem('nom');
        // console.log(nom);

        // // récupération du mail
        // let adressMail = localStorage.getItem("mail");
        // console.log(adressMail);

        let user =localStorage.getItem("datauser");
        console.log("donnée :" + user);
        //on vient faire le parse du user pour récuperer tous les éléments de l'objet
        let objUser=JSON.parse(user)
        console.log(objUser.nom);
        console.log(objUser.mail);
        document.getElementById('nom').innerHTML = objUser.nom;
        document.getElementById('mail').innerHTML = objUser.mail;

        // document.getElementById("nom").innerHTML = nom;
        // document.getElementById("mail").innerHTML = adressMail;