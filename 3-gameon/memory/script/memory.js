"use strict";
var memory = {

    init : function() {
        //välj antal rader här
        var rows = 2;
        //välj antal kollumner här
        var cols = 3;

        var table = document.createElement("table");
        var tr = null;
        var rowNr = null;
        var colNr = null;
        var tdNr = 0;

        var brickOne;
        var brickTwo;
        var guesses = 0;
        var pairs = 0;
        //Antal uppvända brickor som inte ingår i uppvända par
        var counter = 0;

        //Hämtar array med slumpade brickor
        memory.randomArray = RandomGenerator.getPictureArray(rows, cols);
        console.log(this.randomArray);

        //tabell
        var memoryBoard = document.getElementById("memoryBoard");
        memoryBoard.appendChild(table);
        //rader i tabell
        for ( rowNr = 1; rowNr <= rows; rowNr += 1) {
            tr = document.createElement("tr");
            table.appendChild(tr);
            //celler/td på varje rad
            for ( colNr = 1; colNr <= cols; colNr += 1, tdNr += 1) {
                createTd(tdNr);
            }
        }
        function createTd(tdNr) {
            var td = null;
            var a = null;
            var img = null;
            //skapar td med en img-tagg i en a-tagg i och skjuter in den i raden
            td = document.createElement("td");
            tr.appendChild(td);
            a = document.createElement("a");
            a.href = "#";
            //bilden är 0.png d v s nedvänd bricka
            img = document.createElement("img");
            img.setAttribute("src", "pics/0.png");

            a.appendChild(img);
            td.appendChild(a);

            //kopplar klickevent till a-taggen
            a.onclick = function(e) {
                var sorce = img.getAttribute("src");
                var newSorce = "pics/" + memory.randomArray[tdNr] + ".png";
                //om bilden är nedvänd(0.png)
                if (sorce === "pics/0.png") {
                    //om antalet uppvända brickor som inte ingår i par är färre än 2
                    if (counter < 2) {
                        img.setAttribute("src", newSorce);
                        counter += 1;

                        if (counter === 1) {
                            brickOne = img;
                        }
                        //om antalet uppvända brickor som ej ingår i par är 2
                        if (counter === 2) {
                            brickTwo = img;
                            guesses += 1;
                            //om sökvägen till de två uppvända brickorna är samma
                            if (brickOne.getAttribute("src") === brickTwo.getAttribute("src")) {
                                counter = 0;
                                pairs += 1;
                                //om alla brickor i spelet är uppvända(ingår i uppvända par)
                                if (pairs === memory.randomArray.length / 2) {
                                    var text = document.createTextNode("Då var spelet slut! Du behövde " + guesses + " försök!");
                                    var p = document.createElement("p").appendChild(text);
                                    document.getElementById("counter").appendChild(p);
                                }
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

    randomArray : []
}
window.onload = function() {
    memory.init();
}
