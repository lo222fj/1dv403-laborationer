"use strict";

window.onload = function() {

	var birthday = function(date) {

		console.log(date);

		var dateTypeBirthday = new Date(date);

		if (isNaN(dateTypeBirthday.valueOf())) {
			throw new Error("Skriv in ett datum på formen 'ÅÅÅÅ-MM-DD'");
		};
		console.log("Före function");

		function getNextBirthday() {

			console.log("Först i getNextBirthday");

			var birthYear = dateTypeBirthday.getFullYear();
			var birthMonth = dateTypeBirthday.getMonth();
			var birthDate = dateTypeBirthday.getDate();
			var newDate = new Date();
			//Datum när scriptet körs, aktuellt

			var thisYear = newDate.getFullYear();
			var nextYear = thisYear + 1;

			var birthdayThisYear = new Date(thisYear, birthMonth, birthDate);
			var birthdayNextYear = new Date(nextYear, birthMonth, birthDate);
			var nextBirthday = birthdayThisYear;

			console.log(birthdayThisYear);
			console.log(birthdayNextYear);
			console.log(newDate - birthdayThisYear);
			console.log(newDate - birthdayNextYear);

			if ((newDate - birthdayThisYear) > 0) {
				nextBirthday = birthdayNextYear;

				return nextBirthday;
			};
			var nextBirthday = getNextBirthday();
console.log(nextBirthday);
		}
		

		//return nextBirthday-newDate;
		// Din kod här.

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
