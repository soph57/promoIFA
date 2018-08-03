	/*

		etape 1 Récuperer json interroger bdd en javascript
		etape 2 Organiser manipuler modifier les données
		etape 3 Pour chaque eleve créer sa miniature
		etape 4 Ajoute la miniature a la liste
		etape 5 Gerer le clic

		deuxieme vue

		etape 1 Recuperer l'eleve selectionné
		etape 2 On positionne les informations dans la page

		RESSOURCE
		MANIPULER
		MODIFIER LE DOM DES ELEMENT HTML
		GERER LES ELEMENTS

	*/
	var lesEleves = listeEleves;

	lesEleves.forEach(function(element) {
		var newLiSingle = document.createElement("li")
		newLiSingle.innerHTML =
			"<li class='list-group-item'> <b>" + "Nom: " + "</b> <p>" +  element.nom + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Prenom: " + "</b> <p>" + element.prénom + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Age: " + "</b> <p>" +  element.age + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Ville: " + "</b> <p>" +  element.ville + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Javascript: " + "</b> <p>" +  element.javascript + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Avant l\'IFA: " + "</b> <p>" +  element.before_ifa + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Pourquoi l\'IFA: " + "</b> <p>" +  element.why_ifa + "</p> </li>"  +
			"<li class='list-group-item'> <b>" + "Application favorite: " + "</b> <p>" +  element.fav_app + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Pourquoi application favorite: " + "</b> <p>" + element.fav_app_why + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Site favoris: " + "</b> <p>" + element.fav_web + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Pourquoi site favoris: " + "</b> <p>" + element.fav_web_why + "</p> </li>" +
			"<li class='list-group-item'> <b>" + "Mail: " + "</b> <p>" + element.contact_mail + "</p> </li>";

			var monContainerSingle = document.getElementById("single");
			monContainerSingle.appendChild(newLiSingle);
		

	});
