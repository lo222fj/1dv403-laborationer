"use strict";
var memory = {

	init : function() {
		var rows = 2;
		//välj antal rader här
		var cols = 4;
		//välj antal kollumner här
		var table = document.createElement("table");
		var tr = null;
		var td = null;
		var a = null;
		var rowNr = null;
		var colNr = null;

		memory.randomArray = RandomGenerator.getPictureArray(rows, cols);
		console.log(this.randomArray);

		var memoryBoard = document.getElementById("memoryBoard");

		memoryBoard.appendChild(table);

		for (rowNr = 1; rowNr <= rows; rowNr += 1) {
			tr = document.createElement("tr");
			table.appendChild(tr);
			
			for (colNr = 1; colNr <= cols; colNr += 1) {
				td = document.createElement("td");
				tr.appendChild(td);
				a = document.createElement("a");
				a.href = "#";
				a.innerHTML = "plupp";
				td.appendChild(a);
			}

		}

	},

	randomArray : [],

}
window.onload = function() {
	memory.init();
	console.log(memory.randomArray);
}
