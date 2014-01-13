"use strict";
var validator = {

    init : function() {
        var form = document.getElementById("form");
        var fn = form.elements["firstName"];
        var sn = form.elements["surName"];
        var postcode = form.elements["postcode"];
        var email = form.elements["email"];
        var button = form.elements["buy"];

        //Sätter fokus i första inputen
        fn.focus();
        button.disabled=true;

        //Eventhanterare
        fn.onblur = function() {
            validateNotEmpty(this, document.getElementById("firstNameHelp"));
            if (validateAll(form)) {
                button.disabled = false;
            }
        };
        sn.onblur = function() {
            validateNotEmpty(this, document.getElementById("surNameHelp"));
            if (validateAll(form)) {
                button.disabled = false;
            }
        };
        postcode.onblur = function() {
            validatePostcode(this);
            if (validateAll(form)) {
                button.disabled = false;
            }
        };
        email.onblur = function() {
            validateEmail(this, document.getElementById("emailHelp"));
            if (validateAll(form)) {
                button.disabled = false;
            }
        };
        button.onclick = function() {
            if (validateAll(form)) {
                showConfirmWindow(form);
            }
        };

        function showConfirmWindow(form) {
            /*Loopar alla element för att "disabla" alla för att man inte ska kunna ändra
             * i formulär när rutan ligger framför*/
            var nr;
            for ( nr = 1; nr < form.elements.length; nr += 1) {
                form.elements[nr].disabled = true;
            }

            // Skapar dimmat bakgrundsfönster
            var overlayDiv = document.createElement("div");
            overlayDiv.setAttribute("id", "overlay");
            document.body.appendChild(overlayDiv);

            //BEKRÄFTELSERUTA
            //Skapar rutan med inmatade uppgifter för bekräftelse
            var confirmationDiv = document.createElement("div");
            confirmationDiv.setAttribute("id", "confirmationDiv");
            document.body.appendChild(confirmationDiv);
            //Header
            var confirmationDivHeader = document.createElement("h1");
            confirmationDivHeader.appendChild(createTextnode(confirmationDivHeader, "Vänligen bekräfta ditt köp"));

            var confirmationDivClose = document.createElement("span");
            confirmationDiv.appendChild(confirmationDivHeader);

            //Skriver ut varje par av fältnamn(span) och ifyllt värde (span) i p-tag
            var i;
            var label = document.getElementsByTagName("label");

            for ( i = 0; i < label.length; i += 1) {
                var row = document.createElement("p");
                confirmationDiv.appendChild(row);
                //Varje fältnamn
                var inputName = document.createElement("span");
                inputName.setAttribute("class", "labels")

                var inputText = document.createTextNode(label[i].firstChild.textContent);
                //firstChild returnerar en nod. Därför ska jag inte skapa en ny!
                //console.log("inputName " + inputName);
                //console.log("inputText " + inputText)
                inputName.appendChild(inputText);
                row.appendChild(inputName);
                //Varje inmatat värde
                var inputValue = document.createElement("span");
                inputValue.setAttribute("class", "customerInput");
                var valueText = form.elements[i + 1].value;
                var textNode = document.createTextNode(valueText);
                inputValue.appendChild(textNode);
                row.appendChild(inputValue);

                console.log(label[i].firstChild);
                console.log(form.elements[i + 1].value);
            }
            //Footer med två knappar
            var confirmationDivFooter = document.createElement("footer");
            var cancelButton = document.createElement("input");
            cancelButton.setAttribute("type", "button");
            cancelButton.setAttribute("value", "Avbryt");
            cancelButton.onclick = cancel;

            var confirmButton = document.createElement("input");
            confirmButton.setAttribute("type", "button");
            confirmButton.setAttribute("value", "Bekräfta ditt köp");
            confirmButton.onclick = confirm;

            confirmationDiv.appendChild(confirmationDivFooter);
            confirmationDivFooter.appendChild(cancelButton);
            confirmationDivFooter.appendChild(confirmButton);
        };

        function confirm() {
            disabledFalse();
            form.submit();
        }
        function validateAll() {
            if (validateNotEmpty(fn, document.getElementById("firstNameHelp")) && 
            validateNotEmpty(sn, document.getElementById("surNameHelp")) && 
            validatePostcode(postcode) && 
            validateEmail(email, document.getElementById("emailHelp"))) {
                return true;
            } else {
                return false
            };
        };
        function cancel() {
            var overlay = document.getElementById("overlay");
            overlay.remove();
            var confirmationDiv = document.getElementById("confirmationDiv");
            confirmationDiv.remove();

            disabledFalse();
        }
        /*Egenskap som är disabled skickas inte
         med när ett formulär skickas. Måste ändra innan. */
        function disabledFalse() {
            var nr;
            for ( nr = 1; nr < form.elements.length; nr += 1) {
                form.elements[nr].disabled = false;
            }
        }
        function validatePostcode() {
            var checkedPostcode = correctPostcode(postcode.value);
            //Här är det postnr som ska skickas
            postcode.value = checkedPostcode;
            var answer = validateFiveDigits(checkedPostcode, document.getElementById("postcodeHelp"));
            return answer;
        }
        function validateFiveDigits(checkedPostcode, helpTextSpan) {
            //validateNotEmpty(inputField, helpTextSpan);
            removeChilds(helpTextSpan);
            var textNodeInSpan = createTextnode(helpTextSpan);

            var pattern = /^\d{5}$/;
            if (!checkedPostcode.match(pattern)) {
                //inputField.focus();
                textNodeInSpan.nodeValue = "Fyll i på mönstret XXXXX där X är en siffra";
                return false;
            } else {
                textNodeInSpan.nodeValue = "";
                return true;
            }
        }
        //Rensar inmatning från "SE", tomrum och "-"
        function correctPostcode(inputValue) {
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
                return false;
            } else {
                textNodeInSpan.nodeValue = "";
                return true;
            }
        }
        //Validering av email-adress
        function validateEmail(inputField, helpTextSpan) {
            removeChilds(helpTextSpan);
            var textNodeInSpan = createTextnode(helpTextSpan);

            var pattern = /^(?!\.)(\w|-|\.){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}$/;
            if (!inputField.value.match(pattern)) {
                textNodeInSpan.nodeValue = "Angiven e-postadress är inte giltig";
                return false;
            } else {
                textNodeInSpan.nodeValue = "";
                return true;
            }
        }
        //Skapa textnod
        function createTextnode(element, text) {
            var textNodeInElement = document.createTextNode(text);
            element.appendChild(textNodeInElement);
            return textNodeInElement;
        }
        //Plocka bort tidigare textnoder
        function removeChilds(span) {
            if (span.hasChildNodes()) {
                span.removeChild(span.firstChild);
            }
        }
    }
};
window.onload = function() {
    validator.init();
};
