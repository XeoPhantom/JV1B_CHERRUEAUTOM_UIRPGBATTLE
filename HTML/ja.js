document.getElementById("RPGBattlesansannimation").innerHTML = "Hello JavaScript";

var hp = 100 ;
var hattaque = 50;
var shield = 5;

var hplapin = 666;
var attaquelapin =10;

Attaquebutton.onclick = function() {
    hplapin = hattaque - hplapin;
    "les Monstres contre attaques!"
    hp = hp - attaquelapin 

}
DefenseButton.onclick = function() {
    hp = hp + shield
    "les Monstres contre attaques!"
    hp = hp - attaquelapin 

}
Ultime.onclick = function() {
  hp = hp - 50
  "vous sacrifier voyre vie en echange d'une double attaque"
  hattaque = hattaque * 2
  hplapin = hplapin - hattaque
  hattaque / 2 
  "les Monstres contre attaques!"
    hp = hp - attaquelapin
}
