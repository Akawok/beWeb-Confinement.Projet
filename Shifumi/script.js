// DECLARATION DES VARIABLES :
	let userScore = 0;
	let computerScore = 0;
	const userScore_span = document.getElementById("score-joueur");
	const computerScore_span = document.getElementById("score-ia");
	const scordBoard_div = document.querySelector(".score");
	const result_p = document.querySelector(".result > p");
	const rock_div = document.getElementById("p");
	const paper_div = document.getElementById("f");
	const scissors_div = document.getElementById("c");
// DECLARATION FONCTION CHOIX I.A :
	function getComputerChoice() {
		const choices = ["p", "f", "c"];
		const randomNumber = Math.floor(Math.random() * choices.length);
		return choices[randomNumber];
	}
// DECLARATION FONCTION DE CONVERSION
	function convert(letter){
		if (letter === "p") return "Pierre";
		if (letter === "f") return "Feuille";
		return "Ciseau";
	}
// DECLARATION EN CAS DE VICTOIRE :
	function win(userChoice, computerChoice) {
		const smallUserWord = "(Vous)".fontsize(3).sub();
		const smallComputerWord = "(I.a)".fontsize(3).sub();
		const userChoice_div = document.getElementById(userChoice);	
		userScore++;
		userScore_span.innerHTML = userScore;
		result_p.innerHTML = `${convert(userChoice)}${smallUserWord} bat ${convert(computerChoice)}${smallComputerWord}<br> Vous gagnez ! 🔥`;
		userChoice_div.classList.add("green-glow");
		setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
	}
// DECLARATION EN CAS DE DEFAITE :
	function lose(userChoice, computerChoice) {
		const smallUserWord = "(Vous)".fontsize(3).sub();
		const smallComputerWord = "(I.a)".fontsize(3).sub();
		const userChoice_div = document.getElementById(userChoice);			
		computerScore++;
		computerScore_span.innerHTML = computerScore;
		result_p.innerHTML = `${convert(userChoice)}${smallUserWord} perd contre ${convert(computerChoice)}${smallComputerWord}<br> Vous perdez...`;
		userChoice_div.classList.add("red-glow");
		setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
		}			
// DECLARATION EN CAS D'EGALITE :	
	function draw(userChoice, computerChoice) {
		const smallUserWord = "(Vous)".fontsize(3).sub();
		const smallComputerWord = "(I.a)".fontsize(3).sub();
		const userChoice_div = document.getElementById(userChoice);	
		result_p.innerHTML = `${convert(userChoice)}${smallUserWord} est égale à ${convert(computerChoice)}${smallComputerWord}<br> Vous faites égalité !`;
		userChoice_div.classList.add("gray-glow");
		setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);		
	}
// DECLARATION DE COMPARAISON :
	function game(userChoice) {
		const computerChoice = getComputerChoice();
		switch (userChoice + computerChoice) {
			case "pc":
			case "fp":
			case "cf":
				win(userChoice, computerChoice);
				break;
			case "pf" :
			case "fc" :
			case "cp" :
				lose(userChoice, computerChoice);
				break;
			case "pp":
			case "ff":
			case "cc":
				draw(userChoice, computerChoice); 
				break;
		}
	}
// DECLARATION FONCTION DU CHOIX JOUEUR :
	function main() {
		rock_div.addEventListener('click', () => game("p"));
		paper_div.addEventListener('click', () => game("f"));
		scissors_div.addEventListener('click', () => game("c"));		
	}

	main();