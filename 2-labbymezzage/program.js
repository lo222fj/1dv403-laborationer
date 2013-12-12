/*Efter detta ska du skapa ett statiskt objekt (objektliteral) i vilket du lägger själva applikationens
 ”motor”. Detta statiska objekt lägger du i en egen js-fil.
 */"use strict";
var MessageBoard = {

	messages : [],

	renderMessages : function() {
		//tar bort tidigare meddelanden
		var outputDiv = document.getElementById("messageOutput");
		outputDiv.innerHTML = "";

		//loopar igenom meddelanden och anropar renderMessage för varje objekt
		var i, counter;
		for ( i = 0; i < MessageBoard.messages.length; i += 1) {

			MessageBoard.renderMessage(i);
		}
		MessageBoard.countMessages();
	},

	countMessages : function() {
		var counterDiv = document.getElementById("counter");

		counterDiv.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
	},

	//skriver ut ett meddelande
	renderMessage : function(messageID) {

		var outputDiv = document.getElementById("messageOutput");

		//skapar en article som ska innehålla varje meddelande och lägger den i div för alla meddelanden
		var eachMessage = document.createElement("article");
		outputDiv.appendChild(eachMessage);

		//gör tid-knapp...
		var imgClock = document.createElement("img");
		imgClock.setAttribute("src", "clock.png");
		imgClock.setAttribute("alt", "Date and time");
		//...och skjuter in den i en a-tag...
		var aClock = document.createElement("a");
		aClock.setAttribute("href", "#");
		aClock.appendChild(imgClock);
		//...som skjuts in i meddelandet
		eachMessage.appendChild(aClock);

		aClock.onclick = function() {
			alert(MessageBoard.messages[messageID].getDateText());
		}
		//gör ta-bort-knapp...
		var imgRemove = document.createElement("img");
		imgRemove.setAttribute("src", "remove.png");
		imgRemove.alt = "Close";
		//...och skjuter in den i en a-tag...
		var aRemove = document.createElement("a");
		aRemove.href = "#";
		aRemove.appendChild(imgRemove);
		//...som skjuts in i meddelandet
		eachMessage.appendChild(aRemove);

		aRemove.onclick = function() {
			if ((confirm("Vill du verkligen radera meddelandet?")) == true)
				MessageBoard.removeMessage(messageID);
		}
		//skapar en p-tag med inmatad text i. Denna läggs till i meddelandet
		var messageText = document.createElement("p");
		messageText.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		eachMessage.appendChild(messageText);

		//skapar en span som innehåller tid då meddelandet skapades. Denna läggs i meddelandet
		var timeOutprint = document.createElement("span");
		var time = MessageBoard.messages[messageID].getDate().toLocaleTimeString();
		timeOutprint.innerHTML = time;
		eachMessage.appendChild(timeOutprint);

		//Lägger ut antal meddelanden
		MessageBoard.countMessages();

	},

	removeMessage : function(messageID) {
		MessageBoard.messages.splice(messageID, 1);
		MessageBoard.renderMessages();
	},

	init : function(e) {
		/*Eventhanterare som känner av nedtryckt tangent läggs på textrutan
		 Om nedtryckt tangent är enter(13) och shift-tangenten inte är nedtryckt
		 så  anropas funktionen submitIfEnterPresses...*/
		writeMessage.onkeydown = function(e) {

			if (!e) {
				var e = window.event;
			};
			if (e.keyCode == 13 && e.shiftKey == false) {
				e.preventDefault();
				submitIfEnterPressed();
			}
		}
		//...som anropar createNewMessage
		function submitIfEnterPressed() {

			MessageBoard.createNewMessage()
		}

		//Eventhanterare på skickaknapp. Knappen tilldelas funktionen createNewMessge
		var submit = document.getElementById("saveMessage");
		submit.onclick = MessageBoard.createNewMessage;

		MessageBoard.countMessages();

		writeMessage.focus();
	},
	createNewMessage : function() {
		var text;
		var message = {};

		text = document.getElementById("writeMessage").value;
		message = new Message(text, new Date());
		MessageBoard.messages.push(message);

		var textInput = document.getElementById("writeMessage");
		textInput.value = "";

		document.getElementById("writeMessage").focus();
		//MessageBoard.renderMessages(); VÄLJ DENNA OCH KOMMATERA BORT NÄSTA RAD FÖR ATT GÅ VIA MESSAGES
		MessageBoard.renderMessage(MessageBoard.messages.length - 1);
	},
}

window.onload = function() { debugger;
	MessageBoard.init();

}; 