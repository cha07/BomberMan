var hero = document.querySelector('#hero');
var bomb = document.querySelector("#bomb");
var map = document.querySelector('#map');

var grille = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 1, 1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 4],
    [4, 1, 2, 3, 2, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 4],
    [4, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 4],
    [4, 3, 2, 3, 2, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 4],
    [4, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 4],
    [4, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 4],
    [4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 4],
    [4, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 4],
    [4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 4],
    [4, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 4],
    [4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]];

function afficherMap() {

    var x, y = 0;
    var wall;
    var wallDestruct;
    var floor;
    var bord;

    for (x = 0; x < 19; x++) {

        for (y = 0; y < 13; y++) {

            if (grille[y][x] === 4) {
                wall = document.createElement("div");
                wall.setAttribute("class", "bord");
                map.appendChild(wall);
                wall.style.top = y * 50 + "px";
                wall.style.left = x * 50 + "px";
                wall.style.backgroundImage = "url('img/bordGif.gif')";
            }

            if (grille[y][x] === 2) {
                wall = document.createElement("div");
                wall.setAttribute("class", "wall");
                map.appendChild(wall);
                wall.style.top = y * 50 + "px";
                wall.style.left = x * 50 + "px";
                wall.style.backgroundImage = "url('img/carre-3.png')";
            }

            if (grille[y][x] === 3) {

                wallDestruct = document.createElement("div");
                wallDestruct.setAttribute("class", "wall-destruct");
                map.appendChild(wallDestruct);
                wallDestruct.style.top = y * 50 + "px";
                wallDestruct.style.left = x * 50 + "px";
                wallDestruct.style.backgroundImage = "url('img/wall-destruct.png')";

            } else if (grille[y][x] === 1) {

                floor = document.createElement("div");
                floor.setAttribute("class", "floor");
                map.appendChild(floor);
                floor.style.top = y * 50 + "px";
                floor.style.left = x * 50 + "px";
                floor.style.backgroundImage = "url('img/floor.png')";
            }
        }
    }
}

// deplacement hero ----------------------------------------------

afficherMap();

var hero = document.querySelector('#hero');
var bomb = document.querySelector("#bomb");
var controlActive = true
document.addEventListener("keydown", function (e) {

    var posHero = 0;
    var heroLeft = hero.offsetLeft;
    var heroTop = hero.offsetTop;
    var posBlockLeft = hero.offsetLeft / 50;
    var posBlockTop = hero.offsetTop / 50;
    if (controlActive) {
        switch (e.keyCode) {

            case 38:

                if (grille[posBlockTop - 1][posBlockLeft] == 1) {
                    hero.style.top = (posBlockTop - 1) * 50 + "px";
                }
                hero.style.backgroundImage = "url('img/h-top.png')";
                heroDie()
                break;

            case 39:
                if (grille[posBlockTop][posBlockLeft + 1] == 1) {
                    hero.style.left = (posBlockLeft + 1) * 50 + "px";
                }
                hero.style.backgroundImage = "url('img/h-d.png')";
                heroDie()
                break;

            case 40:

                if (grille[posBlockTop + 1][posBlockLeft] == 1) {
                    hero.style.top = (posBlockTop + 1) * 50 + "px";
                }
                hero.style.backgroundImage = "url('img/h.png')";
                heroDie()
                break;

            case 37:
                if (grille[posBlockTop][posBlockLeft - 1] == 1) {
                    hero.style.left = (posBlockLeft - 1) * 50 + "px";
                }
                hero.style.backgroundImage = "url('img/h-g.png')";
                heroDie()
                break;

            case 32:
                if (posHero === 0) {
                    bomb.style.left = heroLeft + "px";
                    bomb.style.top = heroTop + "px";
                    bomb.style.backgroundImage = "url('img/bomb.png')";
                    bomb.style.display = "block";

                    setTimeout(boom, 1500);
                    setTimeout(suppexplosion, 2000);

                }
                break;
        }
    }
});

// déplacement Morgane
const badgirl = document.querySelector("#mechante");

function random() {
    var min = 1;
    var max = 4;
    var dir = Math.floor(Math.random() * Math.floor(max));
    console.log(dir);
    var posBlockLeft = badgirl.offsetLeft / 50;
    var posBlockTop = badgirl.offsetTop / 50;

    if (dir == 0) {     // ---------- Droite ---------
        if (grille[posBlockTop][posBlockLeft + 1] == 1) {
            badgirl.style.left = badgirl.offsetLeft + 50 + "px";
            badgirl.style.backgroundImage = "url('img/m-d.png')";
            badgirl.style.backgroundSize = "50px";


        } 
    } else if (dir == 1) {        // --------- Gauche ----------
        if (grille[posBlockTop][posBlockLeft - 1] == 1) {
            badgirl.style.left = badgirl.offsetLeft - 50 + "px";
            badgirl.style.backgroundImage = "url('img/m-g.png')";
            badgirl.style.backgroundSize = "50px";


        } 

    } else if (dir == 3) {   // --------- Bas -------------- 
        if (grille[posBlockTop + 1][posBlockLeft] == 1) {
            badgirl.style.top = badgirl.offsetTop + 50 + "px";
            badgirl.style.backgroundImage = "url('img/m-bot.png')";
            badgirl.style.backgroundSize = "50px";

        }

    } else if (dir == 2) {   // --------- Haut ----------
        if (grille[posBlockTop - 1][posBlockLeft] == 1) { console.log(grille[posBlockTop]);
        
            badgirl.style.top = badgirl.offsetTop - 50 + "px";
            badgirl.style.backgroundImage = "url('img/m-top.png')";
            badgirl.style.backgroundSize = "50px";

        } 
    }
} // FIN IF ---------------------------------------------------------

setInterval(random, 150);

//Tuer l'ennemie 

function killMorgane(explosion) {
    var posBadgirlLeft =  badgirl.offsetLeft;
    var posBadgirlTop = badgirl.offsetTop;
    var posBombLeft = bomb.offsetLeft;
    var posBombTop = bomb.offsetTop;
    var explosionLeft = explosion.offsetLeft;
    
    var element = document.getElementsByClassName('explosion');
    for (var i = element.length - 1; i >= 0; i--) {

        if ((posBombLeft === posBadgirlLeft) && (posBombTop === posBadgirlTop)) {

            badgirl.style.display = "none";
            playerwin.style.display = "block";
            

        } else if ((explosion.offsetTop === posBadgirlTop) && (explosion.offsetLeft === posBadgirlLeft)) {

            badgirl.style.display = "none";
            playerwin.style.display = "block";
        }
    }
}

// bombe ------------------------------------------------------------

function suppexplosion() {

    bomb.style.display = "none";
    var element = document.getElementsByClassName('explosion');

    for (var i = element.length - 1; i >= 0; i--) {
        element[i].parentElement.removeChild(element[i]);
    }

}

function boom(){
    var posBombLeft = bomb.offsetLeft / 50;
    var posBombTop = bomb.offsetTop / 50;
    var explosion;

    if (grille[posBombTop - 1][posBombLeft] == 3 || grille[posBombTop - 1][posBombLeft] == 1) {
    
    explosion = document.createElement("div");
    explosion.setAttribute("class", "explosion");
    map.appendChild(explosion);
    explosion.style.top = (posBombTop - 1) * 50 + "px";
    explosion.style.left = posBombLeft * 50 + "px";
    bomb.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundImage = "url('img/bombex2.png')";
    explosion.style.backgroundSize = "50px";
    killMorgane(explosion);
    breakBlock(explosion);

    } if (grille[posBombTop + 1][posBombLeft] == 3 || grille[posBombTop + 1][posBombLeft] == 1) {
    
    explosion = document.createElement("div");
    explosion.setAttribute("class", "explosion");
    map.appendChild(explosion);
    explosion.style.top = (posBombTop + 1) * 50 + "px";
    explosion.style.left = posBombLeft * 50 + "px";
    bomb.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundImage = "url('img/bombex2.png')";
    explosion.style.backgroundSize = "50px";
    killPlayer(explosion);
    killMorgane(explosion);
    breakBlock(explosion);
    
    } if (grille[posBombTop][posBombLeft - 1] == 3 || grille[posBombTop][posBombLeft - 1] == 1) {
    
    explosion = document.createElement("div");
    explosion.setAttribute("class", "explosion");
    map.appendChild(explosion);
    explosion.style.top = posBombTop * 50 + "px";
    explosion.style.left = (posBombLeft - 1) * 50 + "px";
    bomb.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundImage = "url('img/bombex2.png')";
    explosion.style.backgroundSize = "50px";
    killPlayer(explosion);
    killMorgane(explosion);
    breakBlock(explosion);
    
    } if (grille[posBombTop][posBombLeft + 1] == 3 || grille[posBombTop][posBombLeft + 1] == 1) {
    
    explosion = document.createElement("div");
    explosion.setAttribute("class", "explosion");
    map.appendChild(explosion);
    explosion.style.top = posBombTop * 50 + "px";
    explosion.style.left = (posBombLeft + 1) * 50 + "px";
    bomb.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundImage = "url('img/bombex2.png')";
    explosion.style.backgroundSize = "50px";
    killPlayer(explosion);
    killMorgane(explosion);
    breakBlock(explosion);
    
    }
}

// explosion mur bois -----------------------------------------------------------

    function breakBlock(explosion) {

        var element = document.getElementsByClassName('wall-destruct');
        var wallDestructLeft = 0;
        var wallDestructTop = 0;
    
        for (var i = element.length - 1; i >= 0; i--) {
    
            wallDestructLeft = element[i].offsetLeft / 50;
            wallDestructTop = element[i].offsetTop / 50;
    
            if ((explosion.offsetTop / 50 == wallDestructTop) && (explosion.offsetLeft / 50 == wallDestructLeft)) {
    
                element[i].style.backgroundImage = "url('img/floor2.png')";
    
                if (grille[wallDestructTop][wallDestructLeft] == 3) {
                    grille[wallDestructTop][wallDestructLeft] = 1;
    
                }
    
            }
        }
    }
//Tuer l'ennemie 

    function killMorgane(explosion) {
        var posBadgirlLeft =  badgirl.offsetLeft;
        var posBadgirlTop = badgirl.offsetTop;
        var posBombLeft = bomb.offsetLeft;
        var posBombTop = bomb.offsetTop;
        var explosionLeft = explosion.offsetLeft;
        
        var element = document.getElementsByClassName('explosion');
        for (var i = element.length - 1; i >= 0; i--) {
    
            if ((posBombLeft === posBadgirlLeft) && (posBombTop === posBadgirlTop)) {
    
                badgirl.style.display = "none";
                playerwin.style.display = "block";
                
    
            } else if ((explosion.offsetTop === posBadgirlTop) && (explosion.offsetLeft === posBadgirlLeft)) {
    
                badgirl.style.display = "none";
                playerwin.style.display = "block";
            }
        }
    }

    function killPlayer(explosion) {
        var posHeroLeft =  hero.offsetLeft;
        var posHeroTop = hero.offsetTop;
        var posBombLeft = bomb.offsetLeft;
        var posBombTop = bomb.offsetTop;
        var explosionLeft = explosion.offsetLeft;
        
        var element = document.getElementsByClassName('explosion');
        for (var i = element.length - 1; i >= 0; i--) {
    
            if ((posBombLeft === posHeroLeft) && (posBombTop === posHeroTop)) {
    
                hero.style.display = "none";
                playerlose.style.display = "block";
                
    
            } else if ((explosion.offsetTop === posHeroTop) && (explosion.offsetLeft === posHeroLeft)) {
    
                hero.style.display = "none";
                playerlose.style.display = "block";
            }
        }
    }

    function heroDie () {

        var posHeroLeft = hero.offsetLeft / 50;
        var posHeroTop = hero.offsetTop / 50;
        var posBadgirlLeft = badgirl.offsetLeft / 50;
        var posBadgirlTop = badgirl.offsetTop / 50;
    
        if (posHeroTop == posBadgirlTop && posHeroLeft == posBadgirlLeft) {
    
            hero.style.display = "none";
            playerlose.style.display = "block";
    
            // return true
        }
    
        // return false
    }
