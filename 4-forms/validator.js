"use strict";
var validator = {

	init : function() {
		var form = document.getElementById("form");
		var fn = form.elements["firstName"];
		var sn = form.elements["surName"];
		var postcode = form.elements["postcode"];
		var email = form.elements["email"];
		
		//Sätter fokus i första inputen
		fn.focus();

		alert("Hej");
		//VALIDERING
		//Förnamn
		fn.onblur=function(){
			validateNotEmpty(this, document.getElementById("firstNameHelp"));
		};
		//Efternamn
		sn.onblur=function(){
			validateNotEmpty(this, document.getElementById("surNameHelp"));
		};
		
		//Validering tomma fält
		function validateNotEmpty(inputField, helpTextSpan) {
			removeChilds(helpTextSpan);
			
			var textNodeInSpan =document.createTextNode("");
			helpTextSpan.appendChild(textNodeInSpan);
			
			if(inputField.value.length===0)
			{
				textNodeInSpan.nodeValue="Fältet måste fyllas i";
				
			}else{ 
				textNodeInSpan.nodeValue="";
			}
		}
		//Plocka bort tidigare textnoder
		function removeChilds(span){
			if (span.hasChildNodes()) {
				span.removeChild(span.firstChild);
			}
		}

		/*Loopar igenom alla element och skriver ut värden
		 form.onsubmit = function(e){
		 alert("Hej plupp");

		 for(var i = 0; i < form.elements.length; i +=1){
		 console.log(form.elements[i].value);
		 }
		 return false;
		 };*/
		
		 /*form.onsubmit = function(e) {
		 	//För att användaren inte ska kunna trycka på knappen igen sätt 
		 	//mySendButton.disabled= true; Glöm inte att sätta tillbaka till false
		 	// ev mySendButton.value = "Skickar...";
		 return false
		 }*/

	},
	//cellNotEmpty: function(){

	//},
	//form: document.getElementById("form"),

};
window.onload = function() {
	validator.init();
};
/*Loopa alla element för att ex.vis "disabla" alla. Använd for in eller for-
 * loop med form.elements.length
 *  egenskap disabled = true/false. Egenskap som är disabled skickas inte
 * med när ett formulär skickas. Måste ändra innan. */