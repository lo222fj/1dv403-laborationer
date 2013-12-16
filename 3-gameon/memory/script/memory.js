"use strict";
var memory = {

	init : function() {

		var rows = 3;
		//välj antal rader här
		var cols = 3;
		//välj antal kollumner här

		var table = document.createElement("table");
		var tr = null;
		var rowNr = null;
		var colNr = null;
		var tdNr = 0;

		memory.randomArray = RandomGenerator.getPictureArray(rows, cols);
		console.log(this.randomArray);

		var memoryBoard = document.getElementById("memoryBoard");

		memoryBoard.appendChild(table);

		for ( rowNr = 1; rowNr <= rows; rowNr += 1) {
			tr = document.createElement("tr");
			table.appendChild(tr);

			for ( colNr = 1; colNr <= cols; colNr += 1, tdNr +=1) {
				createTd(tdNr);
			}
		}
		function createTd(tdNr) {
			var td = null;
			var a = null;
			var img = null;

			td = document.createElement("td");
			tr.appendChild(td);
			a = document.createElement("a");
			a.href = "#";

			img = document.createElement("img");
			img.setAttribute("src", "pics/0.png");

			a.appendChild(img);
			td.appendChild(a);

			a.onclick = function(e) {
				var sorce = "pics/"+memory.randomArray[tdNr]+".png";
				img.setAttribute("src", sorce);
				alert(memory.randomArray[tdNr]);
				
			};
		}

	},

	randomArray : [],
	//Vänd bricka. Tar emot den a-tag som klickats på
	/*turnBrick : function() {
	 alert("Iiiii");
	 },*/
	/*turnBackBrick : function(//skicka in a-tag som ska påverkas) {

	 }*/

}
window.onload = function() {
	memory.init();
	console.log(memory.randomArray);

}
