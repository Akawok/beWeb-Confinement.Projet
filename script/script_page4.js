// SCRIPT DE LA PAGE 4 => CONVERTISSEUR CHIFFRES => LETTRES
// ALGORITHME
document.getElementById("fonction").addEventListener("click", function(){
	// DECLARATION DE VARIABLES
	let number = document.getElementById("nombre").value;
    let units2Letters = ['', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf', 'Dix', 'Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'Dix-Sept', 'Dix-Huit', 'Dix-Neuf'],
        tens2Letters = ['', 'Dix', 'Vingt', 'Trente', 'Quarante', 'Cinquante', 'Soixante', 'Soixante', 'Quatre-Vingt', 'Quatre-Vingt'];
    let units = number % 10,
        tens = (number % 100 - units) / 10,
        hundreds = (number % 1000 - number % 100) / 100;
    let unitsOut, tensOut, hundredsOut;
    if (number === 0) {
        document.getElementById("resultat").innerHTML = "<em>Vous avez entré :&nbsp &nbsp</em><b>" + number + "<br></b><em>Ce qui s'écrit : </em><b>Zero</b>";
    } else {
        // Traitement des unités
        unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units];
        // Traitement des dizaines
        if (tens === 1 && units > 0) {
            tensOut = units2Letters[10 + units];
            unitsOut = "";
        } else if (tens === 7 || tens === 9) {
            tensOut = tens2Letters[tens] + '-' + (tens === 7 && units === 1 ? 'et-' : '') + units2Letters[10 + units];
            unitsOut = "";
        } else {
            tensOut = tens2Letters[tens];
        }
        tensOut += (units === 0 && tens === 8 ? 's' : '');
        // Traitement des centaines
       hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'Cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');
        document.getElementById("resultat").innerHTML = "<em>Vous avez entré :&nbsp &nbsp</em><b>" + number + "<br></b><em>Ce qui s'écrit :&nbsp &nbsp</em><b>" + hundredsOut + (hundredsOut && tensOut ? '-' : '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-' : '') + unitsOut;
    }
    if (number == 1000) {
        document.getElementById("resultat").innerHTML = "<em>Vous avez entré :&nbsp &nbsp</em><b>" + number + "<br></b><em>Ce qui s'écrit : </em><b>Mille</b>";
    }
 });
// BOUTON RESET
document.getElementById("reset").addEventListener("click", function(){
	document.getElementById("nombre").value = "";
	document.getElementById("resultat").innerHTML = "";
});