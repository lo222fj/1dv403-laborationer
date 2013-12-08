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
		//skapar en p-tag, lägger den som en child till diven som håller meddelanden
		
		var outputDiv = document.getElementById("messageOutput");
		var text = document.createElement("p");
		outputDiv.appendChild(text);
		var time = MessageBoard.messages[messageID].getDate().toLocaleTimeString();
		//skjuter in texten som finns i meddelandeobjektet i p-taggen
		text.innerHTML = MessageBoard.messages[messageID].getHTMLText() + " " +time;
		
		var counterDiv =document.getElementById("counter");
		counterDiv.innerHTML = "Antal meddelanden: " +MessageBoard.messages.length;
		//var couterDivText=document.createTextNode("Antal meddelanden: "+ MessageBoard.messages.length);
		//counterDiv.appendChild(couterDivText);
	}, 

	init : function(e) {
		var submit = document.getElementById("saveMessage");
		submit.onclick = MessageBoard.createNewMessage;

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
		//MessageBoard.renderMessages(); VÄLJ DENNA OCH KOMMATERA BORT NÄSTA RAD FÖR ATT GÅ VIA MESSAGES
		MessageBoard.renderMessage(MessageBoard.messages.length-1);
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