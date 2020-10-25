// SCRIPT DE LA PAGE 5 => CREER UN PANIER
// DECLARATION DES VARIABLES PRODUITS :
let produit1 = 0;
let produit2 = 0;
let produit3 = 0;
let produit4 = 0;
let total;
// ENREGISTREMENT DES VALEURS DU PRODUIT 1 :
document.getElementById("buy1").addEventListener("click", function(){
	produit1 = parseInt(document.getElementById("produit1").value) * 2500;
	document.getElementById("resultat1").innerHTML = "- " + parseInt(document.getElementById("produit1").value) + " Poule(s) aux Oeufs d'Or : " + produit1 + "€";
	total = produit1 + produit2 + produit3 + produit4;
	document.getElementById("total").innerHTML = "Somme totale du panier : " + total + "€";
}); 
// ENREGISTREMENT DES VALEURS DU PRODUIT 2 :
document.getElementById("buy2").addEventListener("click", function(){
	produit2 = parseInt(document.getElementById("produit2").value) * 1;
	document.getElementById("resultat2").innerHTML = "- " + parseInt(document.getElementById("produit2").value) + " Baguette(s) Tradition : "  + produit2 + "€";
	total = produit1 + produit2 + produit3 + produit4;
	document.getElementById("total").innerHTML = "Somme totale du panier : " + total + "€";
});
// ENREGISTREMENT DES VALEURS DU PRODUIT 3 :
document.getElementById("buy3").addEventListener("click", function(){
	produit3 = parseInt(document.getElementById("produit3").value) * 12;
	document.getElementById("resultat3").innerHTML = "- " + parseInt(document.getElementById("produit3").value) + " mois d'abonnement Pornhub ;) !! : " +  produit3 + "€";
	total = produit1 + produit2 + produit3 + produit4;
	document.getElementById("total").innerHTML = "Somme totale du panier : " + total + "€";
});
// ENREGISTREMENT DES VALEURS DU PRODUIT 4 :
document.getElementById("buy4").addEventListener("click", function(){
	document.getElementById("resultat4").innerHTML = "- Un stage Commando gratuit avec Captain Philippe !! (Faites lui plaisir, offrez lui un abonnement achetable plus haut)";
	total = produit1 + produit2 + produit3 + produit4;
	document.getElementById("total").innerHTML = "Somme totale du panier : " + total + "€";
});
// ENREGISTREMENT DES VALEURS DU PRODUIT 5 :
document.getElementById("buy5").addEventListener("click", function(){
	let color = document.getElementById("color").value;
	if(color === "blue"){
		produit4 = 110;
		document.getElementById("resultat5").innerHTML = "- Vous avez choisis la pillule Bleue pour un côut de : 110€";
		total = produit1 + produit2 + produit3 + produit4;
		document.getElementById("total").innerHTML = "Somme totale du panier : " + total + "€";
	}
	else if(color === "red"){
		produit4 = 111;
		document.getElementById("resultat5").innerHTML = "- Vous avez choisis la pillule Rouge pour un côut de : 111€";
		total = produit1 + produit2 + produit3 + produit4;
		document.getElementById("total").innerHTML = "Somme totale du panier : " + total + "€";
	}
});
// CALCUL DU RENDU DE LA MONNAIE :
document.getElementById("payer").addEventListener("click", function(){
	let rendu = document.getElementById("z").value;
	let x = parseInt(rendu - total);
	if(x==0){
		document.getElementById("rendu").innerHTML = "Le compte est bon !! Merci !"
	}
	else if(x>0){
		document.getElementById("rendu").innerHTML = "Vous avez donné " + rendu + "€ pour une valeure d'achat totale de " + total + "€<br>Votre monnaie : " + x + "€" 
	}
	else if(x<0){
		document.getElementById("rendu").innerHTML = "Vous avez donné " + rendu + "€ pour une valeure d'achat totale de " + total + "€<br>Vous nous devez : " + Math.abs(x) + "€" 
	}
});
// BOUTON RESET :
document.getElementById("reset").addEventListener("click", function(){
	produit1 = 0;
	produit2 = 0;
	produit3 = 0;
	produit4 = 0;
	produit5 = 0;
	total = 0;
	for (let i=1; i<=5; i++) {
		document.getElementById("resultat"+i).innerHTML = "";
	}
	document.getElementById("total").innerHTML = "";
	document.getElementById("rendu").innerHTML = "";
	document.getElementById("produit1").value = "";
	document.getElementById("produit2").value = "";
	document.getElementById("produit3").value = "";
	document.getElementById("z").value = "";
});