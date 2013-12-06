function Message(message, date) {
	console.log(message + date);
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

	this.setText(message);
	//console.log("anrop av this.setText " + message + date);
	this.setDate(date);
	//console.log("anrop av this.setDate " + message + " " + date);
}

Message.prototype.toString = function() {
	//alert(this.date.getHours()+" "+this.date.getMinutes() +" "+this.date.getSeconds());
	return this.getText() + " \(" + this.getDate() + " \)";
}
Message.getHTMLText = function() {
	message = message.replace(/\n/g, '<br />');
}