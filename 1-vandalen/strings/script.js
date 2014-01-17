"use strict";

window.onload = function() {

    // I denna funktion ska du skriva koden för att hantera "spelet"
    var convertString = function(str) {
        var answer = [], index;

        if (str === "" || !isNaN(str)) {
            throw new Error("Du måste mata in ett ord");
        }

        for ( index = 0; index < str.length; index += 1) {

            if (str[index] === "a" || str[index] === "A") {
                answer[index] = "#";
            } else if (str[index] === str[index].toUpperCase()) {
                answer[index] = str[index].toLowerCase();
            } else if (str[index] === str[index].toLowerCase()) {
                answer[index] = str[index].toUpperCase();
            }
            var answerString = answer.join("");
        }

        // Plats för förändring.
        // Returnera den konverterade strängen.
        // Vid fel, kasta ett undantag med ett meddelande till användaren.
        return answerString;
    };
    // ------------------------------------------------------------------------------

    // Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
    var p = document.querySelector("#value");
    // Referens till DOM-noden med id="#value"
    var input = document.querySelector("#string");
    var submit = document.querySelector("#send");

    // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

        p.classList.remove("error");

        try {
            var answer = convertString(input.value);
            // Läser in texten från textrutan och skickar till funktionen "convertString"
            p.innerHTML = answer;
            // Skriver ut texten från arrayen som skapats i funktionen.
        } catch (error) {
            p.classList.add("error");
            // Växla CSS-klass, IE10+
            p.innerHTML = error.message;
        }

    });

};
