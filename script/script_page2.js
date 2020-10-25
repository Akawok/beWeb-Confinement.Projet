// SCRIPT DE LA PAGE 2 => CALCUL DU QUOTIENT JOURNALIER DE CALORIES
// ALGORITHME
document.getElementById("calculer").addEventListener("click", function(){
	let sexe = document.getElementById("sexe").value;
	let poids = parseFloat(document.getElementById("poids").value);
	let taille = parseFloat(document.getElementById("taille").value);
	let taille_m = parseFloat(document.getElementById("taille").value)/100;
	let age = parseInt(document.getElementById("age").value);
	let profil = parseFloat(document.getElementById("profil").value);
	let result = 0;
	if(sexe == "M"){
		result = ((13.707 * poids) + (492.3 * taille_m) - (6.673 * age) + 77.607) * profil;
		document.getElementById("resultat").innerHTML = "Vous êtes un Homme, agé de " + age + " ans.<br>Vous mesurez " + taille + " cm pour un poids donné de " + poids + " Kg<br>Le nombre de calories journalières conseillées pour votre profil est de : " + result.toFixed(2) + " Kcal par jour";
	}
	else{
		result = ((9.740 * poids) + (172.9 * taille_m) - (4.737 * age) + 667.051) * profil;
		document.getElementById("resultat").innerHTML = "Vous êtes une Femme, agé de " + age + " ans.<br>Vous mesurez " + taille + " cm pour un poids donné de " + poids + " Kg<br>Le nombre de calories journalières conseillées pour votre profil est de : " + result.toFixed(2) + " Kcal par jour";
	}
});
// RESET
document.getElementById("reset").addEventListener("click", function(){
	document.getElementById("resultat").innerHTML = "";
	document.getElementById("sexe").value = "";
	document.getElementById("poids").value = "";
	document.getElementById("taille").value = "";
	document.getElementById("age").value = "";
	document.getElementById("profil").value = "";
});