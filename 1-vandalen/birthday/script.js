"use strict";

window.onload = function() {

	var birthday = function(date) {
// Din kod här.

		console.log(date);

		//Ska hantera att inmatning är korrekt
		var dateTypeBirthday = new Date(date);

		if (isNaN(dateTypeBirthday.valueOf())) {
			throw new Error("Skriv in ett datum på formen 'ÅÅÅÅ-MM-DD'");
		};

		//Tar ut månad och dag från födelsedagen
		var birthMonth = dateTypeBirthday.getMonth();
		var birthDate = dateTypeBirthday.getDate();

		//Tar fram datumobjekt för aktuellt tid utan klockslag
		var newDate = new Date();
		var thisDate = newDate.getDate();
		var thisMonth = newDate.getMonth();
		var thisYear = newDate.getFullYear();
		var today = new Date(thisYear, thisMonth, thisDate);
		
		var nextYear = thisYear + 1;

		//Tar fram när nästa födelsedag inträffar
		var birthdayThisYear = new Date(thisYear, birthMonth, birthDate);
		var birthdayNextYear = new Date(nextYear, birthMonth, birthDate);
		var nextBirthday = birthdayThisYear;
		
		if (today > birthdayThisYear) {
			nextBirthday = birthdayNextYear;
		}
		
		//Räknar ut återstående dagar till nästa födelsedag
		var remainingDays = (nextBirthday - today)/1000/60/60/24;
		 
		
		return remainingDays;

		
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
			var answer = birthday(input.value)// Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer) {
				case 0:
					message = "Grattis på födelsedagen!";
					break;
				case 1:
					message = "Du fyller år imorgon!";
					break;
				default:
					message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error) {
			p.classList.add("error");
			// Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}

	});

};
