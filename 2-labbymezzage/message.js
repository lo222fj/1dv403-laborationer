function Message(message, date) {
	//console.log(message + date);
	this.getText = function() {
		//console.log("this.getText " + message + date);
		return message;
	};
	this.setText = function(_text) {
		//console.log("this.setText " + message + _text + date);
		message = _text;
	};
	this.getDate = function() {
		//console.log("this.getDate " + message + date);
		return date;
	};
	this.setDate = function(_date) {
		//console.log("this.setDate " + message + date + _date);
		date = _date;
	};
}

Message.prototype.toString = function() {
	//alert(this.date.getHours()+" "+this.date.getMinutes() +" "+this.date.getSeconds());
	return this.getText() + " \(" + this.getDate('hh, mm, ss') + " \)";
};
Message.prototype.getHTMLText = function() {
	var messageText = this.getText();
	return messageText.replace(/\n/g, '<br />');
	//message = message.replace(/\n/g, '<br />');
};
Message.prototype.getDateText = function(){
	var i = this.getDate().getMonth();
	var months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];

	return	"Inlägget skapades den "+this.getDate().getDate()+" " +months[i]+" "+this.getDate().getFullYear()+" klockan "+this.getDate().toLocaleTimeString();
}
