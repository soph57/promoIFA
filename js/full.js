var lesEleves = listeEleves;



	for (var i = 0; i < lesEleves.length; i++) {

			var newLi = document.createElement("li")
			newLi.innerHTML =
				"<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal' id=" + " '" + i + "' " + "onclick='idIntoVar(" + i + ")'" + ">" +
				lesEleves[i].nom.toUpperCase() + " " + lesEleves[i].prénom.substr(0, 1).toUpperCase() + lesEleves[i].prénom.substr(1, lesEleves[i].prénom.length).toLowerCase() + "</button>";
			var monContainer = document.getElementById("full");
			monContainer.appendChild(newLi);
			console.log(i);


	}

	function idIntoVar(key) {
		// Si clic sur button avec id unique alors mettre le numero de l'id dans la variable idselect
		$(".btn").click(function() {
			var idegalid = $(".btn");
			console.log(idegalid);
		});
		// Si id dans variable
	}

idIntoVar();
