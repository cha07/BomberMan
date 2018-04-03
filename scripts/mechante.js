var cadre = document.querySelector('#map');
// variables objet v
var mechante = document.querySelector('#mechante'); 
var x; var y ; 
var move = 50;
// programmation des touches de direction 
document.onkeydown = function(event) { 
if (event.keyCode == 81) gauche(mechante.offsetLeft); 
if (event.keyCode == 68) droite(mechante.offsetLeft) ; 
if (event.keyCode == 90) haut(mechante.offsetTop); 
if (event.keyCode == 83) bas(mechante.offsetTop); 
} // fin fonction

// quatre fonctions de déplacement 
function gauche(left) { 

    if (left > 10){
    return  mechante.style.left = left - move + "px";
    }
return mechante.style.left = "0px";
} 

function droite(left) {

    if(left > (cadre.offsetWidth - move))
        return mechante.style.left = cadre.offsetWidth + "px";

    if((left + mechante.offsetWidth) < cadre.offsetWidth)
        return mechante.style.left = left + move + "px";
}

function haut(top) { 

    if (top > 10){
    return  mechante.style.top = top - move + "px";
    }
return mechante.style.top = "0px";
} 

function bas(top) {

    if(top > (cadre.offsetHeight - move))
        return mechante.style.top = cadre.offsetHeight + "px";

    if((top + mechante.offsetHeight) < cadre.offsetHeight)
        return mechante.style.top = top + move + "px";
} 