/*   Grille / Plan du jeu
     1     2     3     4     5     6     7     8     9    10     11    12   13    14    15    16    17     18    19
1  ["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],
2  ["#"],["H"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["#"],
3  ["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],
4  ["#"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["#"],
5  ["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],
6  ["#"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["#"],
7  ["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],
8  ["#"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["#"],
9  ["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],
10 ["#"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["#"],
11 ["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],["_"],["#"],
12 ["#"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["_"],["M"],["#"],
13 ["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],["#"],
*/

// var legend = {"["#"]" : "mur", "["_"]" : "passage", "["H"]" : "hero", "["M"]" :"mechant"};



var cadre = document.querySelector('#map');
// variables objet v
var hero = document.querySelector('#hero'); 
var x; var y ; 
var move = 50;
// programmation des touches de direction 
document.onkeydown = function(event) { 
if (event.keyCode == 37) gauche(hero.offsetLeft); 
if (event.keyCode == 39) droite(hero.offsetLeft) ; 
if (event.keyCode == 38) haut(hero.offsetTop); 
if (event.keyCode == 40) bas(hero.offsetTop); 
} // fin fonction

// quatre fonctions de déplacement 
function gauche(left) { 

    if (left > 10){
    return  hero.style.left = left - move + "px";
    }
return hero.style.left = "0px";
} 

function droite(left) {

    if(left > (cadre.offsetWidth - move))
        return hero.style.left = cadre.offsetWidth + "px";

    if((left + hero.offsetWidth) < cadre.offsetWidth)
        return hero.style.left = left + move + "px";
}

function haut(top) { 

    if (top > 10){
    return  hero.style.top = top - move + "px";
    }
return hero.style.top = "0px";
} 

function bas(top) {

    if(top > (cadre.offsetHeight - move))
        return hero.style.top = cadre.offsetHeight + "px";

    if((top + hero.offsetHeight) < cadre.offsetHeight)
        return hero.style.top = top + move + "px";
} 