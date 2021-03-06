"use strict";

var makePerson = function(persArr) {
	//console.log(persArr);
	var result = {};
	// Din kod här...

	//Namnsträng, sorterad
	var names = [];
	var name;
	var i;

	for ( i = 0; i < persArr.length; i++) {
		name = persArr[i].name;
		names.push(name);
	}

	names.sort(function(a, b) {
		return a.localeCompare(b, "sv")
	});
	//"sv" gör att man vet att det blir svenska!

	var namesString = names.join(", ");

	//Åldrar

	var age;
	var ages = [];
	var maxAge;
	var minAge;
	var averageAge;

	for ( i = 0; i < persArr.length; i++) {
		age = persArr[i].age;
		ages.push(age);
	}
	//Maxålder
	Array.max = function(array) {
		return Math.max.apply(Math, array);
	};
	maxAge = Array.max(ages);

	//Minålder
	Array.min = function(array) {
		return Math.min.apply(Math, array);
	};
	minAge = Array.min(ages);
	//Genomsnittsålder
	averageAge = Math.round(ages.reduce(function(x, y) {
		return x + y
	}, 0) / ages.length);
	//console.log(averageAge);

	//Objekt att returnera
	var objekt = {
		names : namesString,
		minAge : minAge,
		maxAge : maxAge,
		averageAge : averageAge
	};

	return objekt;
};
var data= [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
