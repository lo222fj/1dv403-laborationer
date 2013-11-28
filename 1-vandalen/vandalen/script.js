"use strict";

var makePerson = function(persArr) {
	console.log(persArr);
	var result = {};
	// Din kod här...
	console.log( typeof (persArr));

	console.log(persArr[0].name);

	var names = [];
	var name;
	var i;

	console.log(names + "före for");
	for ( i = 0; i < persArr.length; i++) {
		name = persArr[i].name;
		names.push(name);
		console.log(names);
	}

	names.sort();
	console.log(names + "efter sort")
	var namesString =names.join(", ");
	console.log(namesString + "efter join")
	
	var objekt = {
		names : namesString,
		minAge : 0,
		maxAge : 10,
		averageAge : 5
	};

	return objekt;
}