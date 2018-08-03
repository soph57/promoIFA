var lesEleves = listeEleves; // Initialisation et affectation du JSON

for (var i = 0; i < lesEleves.length; i++) {

    /*
     ** Creation de la liste des eleves
     */

    var liAll = document.createElement("li") // Créer un element li
    liAll.innerHTML = // Insert données dans li
        "<li><a class='alert-link' id='" + i + "'>" + // Insert un button avec event id onclick
        lesEleves[i].nom.toUpperCase() + " " + // Nom en majuscule
        lesEleves[i].prénom.substr(0, 1).toUpperCase() + // Premiere lettre prenom majuscule
        lesEleves[i].prénom.substr(1, lesEleves[i].prénom.length).toLowerCase() +
        "</a></li><br>"; // Reste du prenom en minuscule
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
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Nom: </b> " + lesEleves[i].nom + "</p> </li>" + // Insert des li pour chaque proprietes
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Prénom: </b>" + lesEleves[i].prénom + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Age: </b>" + lesEleves[i].age + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Ville: </b>" + lesEleves[i].ville + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Javascript: </b>" + lesEleves[i].javascript + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Avant l\'IFA: </b>" + lesEleves[i].before_ifa + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Pourquoi l\'IFA: </b>" + lesEleves[i].why_ifa + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Application favorite: </b>" + lesEleves[i].fav_app + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Pourquoi application favorite: </b>" + lesEleves[i].fav_app_why + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Site favoris:</b> " + lesEleves[i].fav_web + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Pourquoi site favoris: </b>" + lesEleves[i].fav_web_why + "</p> </li>" +
        "<li class='list-group-item'id=" + " '" + i + "'><p><b>Mail: </b>" + lesEleves[i].contact_mail + "</p> </li>" +
        "<a type='button' id='return' class='btn btn-secondary btn-block' href='index.html'>" + "Retour" + "</a>";
    var containerLiOne = document.getElementById("one"); // Recupere le container ul
    containerLiOne.appendChild(liOne); // Ajouter le li dans le container ul
}

/*
 ** Affiche un profil sur clic d'un eleve
 */

$("a").click(function(event) {
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
