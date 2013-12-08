/*Efter detta ska du skapa ett statiskt objekt (objektliteral) i vilket du lägger själva applikationens
 ”motor”. Detta statiska objekt lägger du i en egen js-fil.
 */
var MessageBoard = {

	messages : [],

	renderMessages : function() {
		//tar bort tidigare meddelanden
		var outputDiv = document.getElementById("messageOutput");
		outputDiv.innerHTML = "";

		//loopar igenom meddelanden och anropar renderMessage för varje objekt
		var i, counter;
		for ( i = 0; i < MessageBoard.messages.length; i += 1)

			MessageBoard.renderMessage(i);
	},
	//skriver ut ett meddelande
	renderMessage : function(messageID) {

		var outputDiv = document.getElementById("messageOutput");

		//skapar en article som ska innehålla varje meddelande och lägger den i div för alla meddelanden
		var eachMessage = document.createElement("article");
		outputDiv.appendChild(eachMessage);

		//gör ta-bort-knapp...
		var imgRemove = document.createElement("img");
		imgRemove.setAttribute("src", "remove.png");
		imgRemove.alt = "Close";
		//...och skjuter in den i en a-tag
		var a = document.createElement("a");
		a.href = "#";
		a.appendChild(imgRemove);
		eachMessage.appendChild(a);
		
		
//HÄR SKA DU FORTSÄTTA! GÖR FUNKTIONEN SOM TAR BORT MEDDELANDE!
		//imgRemove.onclick = function() {
			//MessageBoard.removeMessage(messageID);
		//}
		
		var messageText = document.createElement("p");
		messageText.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		eachMessage.appendChild(messageText);

		var timeOutprint = document.createElement("span");
		var time = MessageBoard.messages[messageID].getDate().toLocaleTimeString();
		timeOutprint.innerHTML = time;
		eachMessage.appendChild(timeOutprint);

		//skjuter in texten som finns i meddelandeobjektet i p-taggen

		var counterDiv = document.getElementById("counter");
		counterDiv.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
		//var couterDivText=document.createTextNode("Antal meddelanden: "+ MessageBoard.messages.length);
		//counterDiv.appendChild(couterDivText);
	},

	init : function(e) {
		var submit = document.getElementById("saveMessage");
		submit.onclick = MessageBoard.createNewMessage;

		document.getElementById("writeMessage").focus();
	},
	createNewMessage : function() {
		var text;
		var message = {};

		text = document.getElementById("writeMessage").value;
		//console.log(text);
		message = new Message(text, new Date());
		//console.log(message.toString());
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

/*
 //var mess = new Message("hej hopp", new Date());
 //this.messages.push(mess);
 //var mess = new Message("HEJ HOPP", new Date());
 //this.messages.push(mess);
 //alert(MessageBoard.messages);
 //alert(MessageBoard.messages[1].getText());
 }*/