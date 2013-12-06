/*Efter detta ska du skapa ett statiskt objekt (objektliteral) i vilket du lägger själva applikationens
 ”motor”. Detta statiska objekt lägger du i en egen js-fil.
 */
var MessageBoard = {

	messages : [],
	renderMessages : function() {

	},
	init : function(e) {

	},
	createNewMessage : function() {
		//var message = document.getElementById("saveMessage");

		//var mess = new Message("hej hopp", new Date());
		//this.messages.push(mess);
		//var mess = new Message("HEJ HOPP", new Date());
		//this.messages.push(mess);
		//alert(MessageBoard.messages);
		//alert(MessageBoard.messages[1].getText());
	},
	renderMessage : function() {

	}, //skriver ut ett meddelande
	renderMessages : function() {

	},//loopar igenom meddelanden och anropar renderMessage för varje objekt
}

window.onload = function() {
	debugger;
	MessageBoard.init();
	
	var submit = document.getElementById("saveMessage");
	
	submit.onclick = function(){
		var text;
		var message={};
		
		text = document.getElementById("writeMessage").value;
		console.log(text);
		message = new Message(text, new Date());
		console.log(message);
		MessageBoard.messages.push(message);
		console.log("FÖRE");
		console.log(MessageBoard.messages);
		console.log("EFTER");
		
	};
	
	
	//alert(text);

};

/*
 window.onload = function() {
 motor.init();
 };
 var motor = {};
 motor.init = function() {
 var newMessage = new Message("plupp", new Date());
 alert(newMessage);
 alert(newMessage.getText());
 newMessage.setText("Jonas är en mupp");
 alert(newMessage);
 }*/