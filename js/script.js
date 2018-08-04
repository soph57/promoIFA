// Tri ordre alphabetique

function tri(a, b)

{

     return (a.nom > b.nom) ? 1 : -1;

}

var lesEleves = listeEleves;

lesEleves.sort(tri);

// Creation de la liste des eleves

for (var i = 0; i < lesEleves.length; i++)

{

     var liAll = document.createElement("li");
     liAll.innerHTML =
          "<li><a class='list-group-item list-group-item-action list-group-item-light link' id='" + i + "'>" +
          lesEleves[i].nom.toUpperCase() + " " +
          lesEleves[i].prénom.substr(0, 1).toUpperCase() +
          lesEleves[i].prénom.substr(1, lesEleves[i].prénom.length).toLowerCase() +
          "</a></li>";
     var containerLiAll = document.getElementById("all");
     containerLiAll.appendChild(liAll);

}

// Creation du profil

function getOneProfil(i)

{

     var title = document.createElement("h2");
     title.innerHTML = "<h2>Profil de " + lesEleves[i].prénom.substr(0, 1).toUpperCase() + lesEleves[i].prénom.substr(1, lesEleves[i].prénom.length).toLowerCase() + " " + lesEleves[i].nom.toUpperCase() + "</h2>";
     var divTitle = document.getElementById("titles");
     divTitle.appendChild(title);

     var liOne = document.createElement("li");
     liOne.innerHTML =
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Nom: </b> " + lesEleves[i].nom + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Prénom: </b>" + lesEleves[i].prénom + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Age: </b>" + lesEleves[i].age + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Ville: </b>" + lesEleves[i].ville + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Javascript: </b>" + lesEleves[i].javascript + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Avant l\'IFA: </b>" + lesEleves[i].before_ifa + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Pourquoi l\'IFA: </b>" + lesEleves[i].why_ifa + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Application favorite: </b>" + lesEleves[i].fav_app + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Pourquoi application favorite: </b>" + lesEleves[i].fav_app_why + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Site favoris: </b> " + lesEleves[i].fav_web + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Pourquoi site favoris: </b>" + lesEleves[i].fav_web_why + "</p> </li>" +
          "<li class='list-group-item list-group-item-action list-group-item-light'id='" + i + "'><p><b>Mail: </b>" + lesEleves[i].contact_mail + "</p> </li>" +
          "<a type='button' id='return' class='btn btn-secondary btn-lg btn-block' href='index.html'>" + "Retour" + "</a>";
     var containerLiOne = document.getElementById("one");
     containerLiOne.appendChild(liOne);

     $('h2').replaceAll('h1');

}

// Affiche un profil sur clic

$(".link").click(function(event)

     {
          var idBtn = event.target.id;
          window.document.getElementById("all").remove();
          getOneProfil(idBtn);
     });
