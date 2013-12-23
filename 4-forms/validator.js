"use strict";
var validator = {

    init : function() {
        var form = document.getElementById("form");
        var fn = form.elements["firstName"];
        var sn = form.elements["surName"];
        var postcode = form.elements["postcode"];
        var email = form.elements["email"];

        //Sätter fokus i första inputen
        //alert("Hej");

        fn.focus();

        //Eventhanterare
        fn.onblur = function() {
            validateNotEmpty(this, document.getElementById("firstNameHelp"));
        };
        sn.onblur = function() {
            validateNotEmpty(this, document.getElementById("surNameHelp"));
        };
        postcode.onblur = function() {
            var checkedPostcode =correctPostcode(postcode.value);//Här är det postnr som ska skickas
            postcode.value = checkedPostcode;
            validateFiveDigits(checkedPostcode, document.getElementById("postcodeHelp"));
        };
        email.onblur = function() {
            validateEmail(this, document.getElementById("emailHelp"));
        };
        
        //Validering postnummer
        function validateFiveDigits(checkedPostcode, helpTextSpan) {
            //validateNotEmpty(inputField, helpTextSpan);
            removeChilds(helpTextSpan);
            var textNodeInSpan = createTextnode(helpTextSpan);

            var pattern = /^\d{5}$/;
            if (!checkedPostcode.match(pattern)) {
                //inputField.focus();
                textNodeInSpan.nodeValue = "Fyll i på mönstret XXXXX där X är en siffra";
            } else {
                textNodeInSpan.nodeValue = "";
            }
        }
        function correctPostcode(inputValue){
            var pattern = /SE|\s|-/g;
            var checkedPostcode = inputValue.replace(pattern, "");
            return checkedPostcode;
        }

        //Validering tomma fält
        function validateNotEmpty(inputField, helpTextSpan) {
            removeChilds(helpTextSpan);
            var textNodeInSpan = createTextnode(helpTextSpan);

            if (inputField.value.length === 0) {
                textNodeInSpan.nodeValue = "Fältet måste fyllas i";

            } else {
                textNodeInSpan.nodeValue = "";
            }
        }

        //Validering av email-adress
        function validateEmail(inputField, helpTextSpan) {
            removeChilds(helpTextSpan);
            var textNodeInSpan = createTextnode(helpTextSpan);

            var pattern = /^(?!\.)(\w|-|\.){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}$/;
            if (!inputField.value.match(pattern)) {
                textNodeInSpan.nodeValue = "Angiven e-postadress är inte giltig";

            } else {
                textNodeInSpan.nodeValue = "";
            }
        }

        //Skapa textnod
        function createTextnode(helpTextSpan) {
            var textNodeInSpan = document.createTextNode("");
            helpTextSpan.appendChild(textNodeInSpan);
            return textNodeInSpan;
        }

        //Plocka bort tidigare textnoder
        function removeChilds(span) {
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
    //form: document.getElementById("form"),

};
window.onload = function() {
    validator.init();
};
/*Loopa alla element för att ex.vis "disabla" alla. Använd for in eller for-
 * loop med form.elements.length
 *  egenskap disabled = true/false. Egenskap som är disabled skickas inte
 * med när ett formulär skickas. Måste ändra innan. */