// SCRIPT DE LA PAGE 1 => GENERER UNE TABLE
document.getElementById("function01").addEventListener("click", function(){
	let my_lines_value = document.getElementById("input_lines").value;
	let my_columns_value = document.getElementById("input_columns").value;
	let table = "<table border='1'>";
	for(let i=0; i<parseInt(my_lines_value); i++){
		table+="<tr>" + "<th>Ligne " + (i+1) +"</th>";
		for(let j=0; j<parseInt(my_columns_value); j++){
			table+= "<td>&nbsp;</td>";
		}
		table+="</tr>";
	}
	table+="</table>"
	document.getElementById("result01").innerHTML = table;

});
// BOUTON RESET :
document.getElementById("reset01").addEventListener("click", function(){
	document.getElementById("result01").innerHTML = "";
});