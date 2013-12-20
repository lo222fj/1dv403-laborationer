"use strict";
var memory = {

	init : function() {

		var rows = 4;
		//välj antal rader här
		var cols = 4;
		//välj antal kollumner här

		var table = document.createElement("table");
		var tr = null;
		var rowNr = null;
		var colNr = null;
		var tdNr = 0;

		var brickOne;
		var brickTwo;
		var guesses = 0;
		var pairs = 0;
		var counter = 0;
		//Antal uppvända brickor som inte ingår i uppvända par

		memory.randomArray = RandomGenerator.getPictureArray(rows, cols);
		//console.log(this.randomArray);

		var memoryBoard = document.getElementById("memoryBoard");

		memoryBoard.appendChild(table);

		for ( rowNr = 1; rowNr <= rows; rowNr += 1) {
			tr = document.createElement("tr");
			table.appendChild(tr);

			for ( colNr = 1; colNr <= cols; colNr += 1, tdNr += 1) {
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

				var sorce = img.getAttribute("src");
				var newSorce = "pics/" + memory.randomArray[tdNr] + ".png";
				
					if (sorce == "pics/0.png") {
					if (counter < 2) {
						img.setAttribute("src", newSorce);
						counter += 1;

						if (counter == 1) {
							brickOne = img;
						}

						if (counter == 2) {
							brickTwo = img;
							guesses += 1;
							
							if (brickOne.getAttribute("src") == brickTwo.getAttribute("src")) {
								counter = 0;
								pairs += 1;
									if (pairs==memory.randomArray.length/2) {
										var text = document.createTextNode("Då var spelet slut! Du behövde " + guesses + " försök!");
										var p =document.createElement("p").appendChild(text);
										document. getElementById("counter").appendChild(p);
										
									};
							} else {
								//Vänd inom en sekund med timer
								var timer = setTimeout(function() {
									brickOne.setAttribute("src", "pics/0.png");
									brickTwo.setAttribute("src", "pics/0.png");
									counter = 0
								}, 1000);
							}

						}
					};
				}
			};
		}

	},

	randomArray : [],
}
window.onload = function() {
	memory.init();
}
