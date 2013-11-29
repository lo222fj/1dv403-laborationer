"use strict";

var makePerson = function(persArr) {
	console.log(persArr);
	var result = {};
	// Din kod här...
	
	//Namnsträng, sorterad
	console.log( typeof (persArr));

	console.log(persArr[0].name);

	var names = [];
	var name;
	var i;

	//console.log(names + "före for");
	for ( i = 0; i < persArr.length; i++) {
		name = persArr[i].name;
		names.push(name);
		console.log(names);
	}


	names.sort(function(a, b) { return a.localeCompare(b) });
	console.log(names + "efter sort")
	var namesString =names.join(", ");
	console.log(namesString + "efter join");
	
	//Åldrar
	var birthdays = [];
	var birthday;
	var dateTypeBirthday = {};
	var dateTypeBirthdays = [];
			
	for ( i = 0; i < persArr.length; i++) {
		console.log("i for birthday");
		birthday = persArr[i].born;
		console.log(birthday);
		birthdays.push(birthday);
		dateTypeBirthday = new Date((new Date(birthday)).setHours(0, 0, 0, 0))
		//dateTypeBirthday = new Date(birthday);
		//dateTypeBirthdays = push(dateTypeBirthday);
		console.log(birthdays);
		console.log(dateTypeBirthdays);
	}
	
	
	
	
	/*var minAge = function
	
	//Max
Array.max = function( array ){
    return Math.max.apply( Math, array );
};


//function ( array ){
    return Math.max.apply( Math, array );
}
Array.max(test);
30


//Min
function ( array ){
    return Math.min.apply( Math, array );
}
Array.min(test);
10m
	*/
	
	var objekt = {
		names : namesString,
		minAge : 0,
		maxAge : 10,
		averageAge : 5
	};

	return objekt;
}