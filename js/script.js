var lesEleves = listeEleves; // Initialisation et affectation du JSON

for (var i = 0; i < lesEleves.indexOf(5); i++) {

    /*
     ** Creation de la liste des eleves
     */

        var liAll = document.createElement("li") // Créer un element li
        liAll.innerHTML = // Insert données dans li
            "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal' id='" + i + "' " + 
            "onclick='matchId(" + i + ")'>" + // Insert un button avec event id onclick
            lesEleves[i].nom.toUpperCase() + " " + // Nom en majuscule
            lesEleves[i].prénom.substr(0, 1).toUpperCase() + // Premiere lettre prenom majuscule
            lesEleves[i].prénom.substr(1, lesEleves[i].prénom.length).toLowerCase() +
            "</button><br>"; // Reste du prenom en minuscule
        var containerLiAll = document.getElementById("all"); // Recupere le container ul
        containerLiAll.appendChild(liAll); // Ajouter le li dans le container ul
        console.log(i); // Verif de l'id de tous les buttons

    /*
     ** Creation de la liste du profil d'un eleve
     */

    function getOneProfil(i) { // Fonction pour créer les miniatures
        lesEleves.forEach(function(identity, properties) { // Callback fonction dans fonction
            var liOne = document.createElement("li") // Créer un element li
            liOne.innerHTML = // Insert données dans li
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Nom: " + "</b> <p>" + properties.nom + "</p> </li>" + // Insert des li pour chaque proprietes
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Prenom: " + "</b> <p>" + properties.prénom + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Age: " + "</b> <p>" + properties.age + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Ville: " + "</b> <p>" + properties.ville + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Javascript: " + "</b> <p>" + properties.javascript + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Avant l\'IFA: " + "</b> <p>" + properties.before_ifa + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Pourquoi l\'IFA: " + "</b> <p>" + properties.why_ifa + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Application favorite: " + "</b> <p>" + properties.fav_app + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Pourquoi application favorite: " + "</b> <p>" + properties.fav_app_why + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Site favoris: " + "</b> <p>" + properties.fav_web + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Pourquoi site favoris: " + "</b> <p>" + properties.fav_web_why + "</p> </li>" +
                "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Mail: " + "</b> <p>" + properties.contact_mail + "</p> </li>";
            var containerLiOne = document.getElementById("one"); // Recupere le container ul
            containerLiOne.appendChild(liOne); // Ajouter le li dans le container ul
            return i;
        });
    }

    /*
     ** Affiche un profil sur clic d'un eleve
     */

     function matchId(i) {
     		// Si clic sur button avec id unique alors mettre le numero de l'id dans la variable idselect
     		$(".btn").click(function() {
     			var idegalid = $(".btn");
     			console.log(idegalid);
     		});
     		// Si id dans variable
     	}
}

matchId(i);
getOneProfil(i);
