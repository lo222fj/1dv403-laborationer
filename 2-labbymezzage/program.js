/*Efter detta ska du skapa ett statiskt objekt (objektliteral) i vilket du lägger själva applikationens
 ”motor”. Detta statiska objekt lägger du i en egen js-fil.
 */
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
}