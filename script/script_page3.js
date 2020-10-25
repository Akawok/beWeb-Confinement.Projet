// ALGORITHME
document.getElementById("fonction").addEventListener("click", function(){
	// DECLARATION DES VARIABLES :
	let consonnes = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
	let voyelles = ["a","e","i","o","u","y"];
	let nb_syllabes = Math.floor(Math.random() * document.getElementById("syllabes").value + 2);
	let nb_mots = parseInt(document.getElementById("mots").value);
	let syllabes_consonnes = 1 + Math.floor(Math.random() * (5 - 2) + 1);
	let syllabes_voyelles = 1 + Math.floor(Math.random() * (5 - 2) + 1);
	let syllabes_max = 1 + Math.floor(Math.random() * (5 - 2) + 1);
	let mixage_consonnes = [];
	let mixage_voyelles = [];
	let syllabes_temp = [];
	let syllabes_finales = "";
	let mot_temp = "";
	let mot_final = "";
	// LES BOUCLES :
	for(let i=0; i<nb_mots; i++){ // ==> BOUCLE NOMBRES DE MOTS
		for(let j=0; j<nb_syllabes; j++){ // ==> BOUCLE NOMBRES DE SYLLABES MAX DE L'INPUT
			for(let k=0; k<syllabes_max; k++){ // ==> BOUCLE NOMBRES DE LETTRE ENTRE 2 ET 4 DANS CHAQUES SYLLABES
				for(let l=0; l<syllabes_consonnes; l++){ // ==> BOUCLE CREATION D'UN TABLEAU DE CONSONNES ALEATOIRE
					mixage_consonnes.push(consonnes[Math.floor(Math.random() * consonnes.length)]);
				}
				for(let m=0; m<syllabes_voyelles; m++){ // ==> BOUCLE CREATION D'UN TABLEAU DE VOYELLES ALEATOIRE
					mixage_voyelles.push(voyelles[Math.floor(Math.random() * voyelles.length)]);
				}
				syllabes_temp = mixage_consonnes.concat(mixage_voyelles); // ==> CONCATENATION DU TABLEAU CONSONNES + VOYELLES
				mot_temp = syllabes_temp[Math.floor(Math.random() * syllabes_temp.length)];
			}
			syllabes_finales += mot_temp; // ==> CONSTRUCTION D'UN MOT AVEC LE NOMBRE DE LETTRE ENTRE 2 ET 4 DANS CHAQUES SYLLABES
		}
		mot_final += syllabes_finales + " ";  // REMISE A ZERO DES VALEURS DANS LA BOUCLE DE CREATION DE MOTS POUR NE PAS GARDER LES ANCIENNES VALEURS ET GENERER DE NOUVEAUX MOTS
		syllabes_finales = "";
		nb_syllabes = Math.floor(Math.random() * document.getElementById("syllabes").value + 2);
		syllabes_max = 1 + Math.floor(Math.random() * (5 - 2) + 1);
	}
	// AFFICHAGE DU RESULTAT :
	document.getElementById("resultat").innerHTML = "Un Alien tente de communiquer avec vous...<br><br>Voici son message :<br><br><b>" + mot_final + "</b><br><br> Demandez à Pierre pour la traduction..."
});
// BOUTON RESET
document.getElementById("reset").addEventListener("click", function(){
	document.getElementById("mots").value = "";
	document.getElementById("syllabes").value = "";
	document.getElementById("resultat").innerHTML = "";
});