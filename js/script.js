var lesEleves = listeEleves; // Initialisation et affectation du JSON

for (var i = 0; i < lesEleves.length; i++) {

    /*
     ** Creation de la liste des eleves
     */

    var liAll = document.createElement("li") // Créer un element li
    liAll.innerHTML = // Insert données dans li
        "<button type='button' class='btn btn-primary' id='" + i + "'>" + // Insert un button avec event id onclick
        lesEleves[i].nom.toUpperCase() + " " + // Nom en majuscule
        lesEleves[i].prénom.substr(0, 1).toUpperCase() + // Premiere lettre prenom majuscule
        lesEleves[i].prénom.substr(1, lesEleves[i].prénom.length).toLowerCase() +
        "</button><br>"; // Reste du prenom en minuscule
    var containerLiAll = document.getElementById("all"); // Recupere le container ul
    containerLiAll.appendChild(liAll); // Ajouter le li dans le container ul
    console.log(i); // Verif de l'id de tous les buttons
}

/*
 ** Creation de la liste du profil d'un eleve
 */

function getOneProfil(i) { // Fonction pour créer les miniatures

    var liOne = document.createElement("li") // Créer un element li
    liOne.innerHTML = // Insert données dans li
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Nom: " + "</b> <p>" + lesEleves[i].nom + "</p> </li>" + // Insert des li pour chaque proprietes
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Prenom: " + "</b> <p>" + lesEleves[i].prénom + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Age: " + "</b> <p>" + lesEleves[i].age + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Ville: " + "</b> <p>" + lesEleves[i].ville + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Javascript: " + "</b> <p>" + lesEleves[i].javascript + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Avant l\'IFA: " + "</b> <p>" + lesEleves[i].before_ifa + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Pourquoi l\'IFA: " + "</b> <p>" + lesEleves[i].why_ifa + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Application favorite: " + "</b> <p>" + lesEleves[i].fav_app + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Pourquoi application favorite: " + "</b> <p>" + lesEleves[i].fav_app_why + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Site favoris: " + "</b> <p>" + lesEleves[i].fav_web + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Pourquoi site favoris: " + "</b> <p>" + lesEleves[i].fav_web_why + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><b>" + "Mail: " + "</b> <p>" + lesEleves[i].contact_mail + "</p> </li>" +
        "<a type='button' id='return' href='index.html'>" + "Retour" + "</a>";
    var containerLiOne = document.getElementById("one"); // Recupere le container ul
    containerLiOne.appendChild(liOne); // Ajouter le li dans le container ul
}

/*
 ** Affiche un profil sur clic d'un eleve
 */

$(".btn").click(function(event) {
    var idBtn = event.target.id;
    console.log(idBtn);
     // url = "one.html";
     // window.location.replace(url);
     window.document.getElementById("all").remove();
    getOneProfil(idBtn);
});

// function retour() {
//     url = "index.html";
//     window.location.replace(url);
// }
