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