/*Efter detta ska du skapa ett statiskt objekt (objektliteral) i vilket du lägger själva applikationens 
”motor”. Detta statiska objekt lägger du i en egen js-fil. 
*/
var motor ={};

motor.init =function () {
  alert("Jonas e unnnndeeerbaaaar!!!!");
}

window.onload=function(){motor.init();};