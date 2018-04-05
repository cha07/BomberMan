var grille = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
    [4, 1, 2, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 3, 2, 3, 4],
    [4, 1, 1, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
    [4, 1, 2, 3, 2, 3, 2, 3, 2, 1, 2, 3, 2, 1, 2, 1, 2, 3, 4],
    [4, 1, 1, 3, 1, 3, 1, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 4],
    [4, 3, 2, 3, 2, 1, 2, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 4],
    [4, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 4],
    [4, 3, 2, 1, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 1, 2, 1, 4],
    [4, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 4],
    [4, 3, 2, 1, 2, 1, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 2, 1, 4],
    [4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
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
                wall.style.backgroundImage = "url('img/bord.png')";
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
                break;

            case 39:
                if (grille[posBlockTop][posBlockLeft + 1] == 1) {
                    hero.style.left = (posBlockLeft + 1) * 50 + "px";
                }
                hero.style.backgroundImage = "url('img/h-d.png')";
                break;

            case 40:

                if (grille[posBlockTop + 1][posBlockLeft] == 1) {
                    hero.style.top = (posBlockTop + 1) * 50 + "px";
                }
                hero.style.backgroundImage = "url('img/h.png')";
                break;

            case 37:
                if (grille[posBlockTop][posBlockLeft - 1] == 1) {
                    hero.style.left = (posBlockLeft - 1) * 50 + "px";
                }
                hero.style.backgroundImage = "url('img/h-g.png')";
                break;

            case 32:
                if (posHero === 0) {
                    bomb.style.left = heroLeft + "px";
                    bomb.style.top = heroTop + "px";
                    bomb.style.backgroundImage = "url('img/bomb_item.png')";
                    bomb.style.display = "block";

                    setTimeout(boom, 2000);
                    setTimeout(suppexplosion, 1000);

                }
                break;
        }
    }
});

// déplacement Ennemie
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
} // FIN IF

setInterval(random, 300);

// bombe qui explose pas x)

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
    explosion.style.top = (posBombTop + 1) * 50 + "px";
    explosion.style.left = posBombLeft * 50 + "px";
    bomb.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundSize = "50px";
    
    } if (grille[posBombTop - 1][posBombLeft] = 3 ) {
    
    explosion = document.createElement("div");
    explosion.setAttribute("class", "explosion");
    map.appendChild(explosion);
    explosion.style.top = (posBombTop - 1) * 50 + "px";
    explosion.style.left = posBombLeft * 50 + "px";
    bomb.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundSize = "50px";
    
    } if (grille[posBombTop][posBombLeft + 1] = 3 ) {
    
    explosion = document.createElement("div");
    explosion.setAttribute("class", "explosion");
    map.appendChild(explosion);
    explosion.style.top = posBombTop * 50 + "px";
    explosion.style.left = (posBombLeft + 1) * 50 + "px";
    bomb.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundSize = "50px";
    
    
    
    } if (grille[posBombTop][posBombLeft - 1] = 3 ) {
    
    explosion = document.createElement("div");
    explosion.setAttribute("class", "explosion");
    map.appendChild(explosion);
    explosion.style.top = posBombTop * 50 + "px";
    explosion.style.left = (posBombLeft - 1) * 50 + "px";
    bomb.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundImage = "url('img/bombex.png')";
    explosion.style.backgroundSize = "50px";
    
    }
    }

    // function exploseTheBomb(wallDestruct) {

    //     var posBombLeft = bomb.offsetLeft / 50;
    //     var posBombTop = bomb.offsetTop / 50;
    //     var x, y = 0;
    //     var explosion;
    
    //     var posMonsterLeft = monster.offsetLeft / 50;
    //     var posMonsterTop = monster.offsetTop / 50;
    
    //     audio2.play();
    
    //     if (grille[posBombTop - 1][posBombLeft] == 3 || grille[posBombTop - 1][posBombLeft] == 1) {
    
    //         explosion = document.createElement("div");
    //         explosion.setAttribute("class", "explosion");
    //         map.appendChild(explosion);
    //         explosion.style.top = (posBombTop - 1) * 50 + "px";
    //         explosion.style.left = posBombLeft * 50 + "px";
    //         bomb.style.backgroundImage = "url('img/bomb.png')";
    //         explosion.style.backgroundImage = "url('img/carre-3.png')";
    
    //         breakMonster(explosion);
    //         breakBlock(explosion);
    //     }
    
    //     if (grille[posBombTop + 1][posBombLeft] == 3 || grille[posBombTop + 1][posBombLeft] == 1) {
    
    //         explosion = document.createElement("div");
    //         explosion.setAttribute("class", "explosion");
    //         map.appendChild(explosion);
    //         explosion.style.top = (posBombTop + 1) * 50 + "px";
    //         explosion.style.left = posBombLeft * 50 + "px";
    //         bomb.style.backgroundImage = "url('img/bomb.png')";
    //         explosion.style.backgroundImage = "url('img/carre-3.png')";
    //         breakMonster(explosion);
    //         breakBlock(explosion);
    //     }
    
    //     if (grille[posBombTop][posBombLeft + 1] == 3 || grille[posBombTop][posBombLeft + 1] == 1) {
    
    //         explosion = document.createElement("div");
    //         explosion.setAttribute("class", "explosion");
    //         map.appendChild(explosion);
    //         explosion.style.top = posBombTop * 50 + "px";
    //         explosion.style.left = (posBombLeft + 1) * 50 + "px";
    //         bomb.style.backgroundImage = "url('img/bomb.png')";
    //         explosion.style.backgroundImage = "url('img/carre-3.png')";
    //         breakMonster(explosion);
    //         breakBlock(explosion);
    //     }
    
    //     if (grille[posBombTop][posBombLeft - 1] == 3 || grille[posBombTop][posBombLeft - 1] == 1) {
    
    //         explosion = document.createElement("div");
    //         explosion.setAttribute("class", "explosion");
    //         map.appendChild(explosion);
    //         explosion.style.top = posBombTop * 50 + "px";
    //         explosion.style.left = (posBombLeft - 1) * 50 + "px";
    //         bomb.style.backgroundImage = "url('img/bomb.png')";
    //         explosion.style.backgroundImage = "url('img/carre-3.png')";
    //         breakMonster(explosion);
    //         breakBlock(explosion);
    
    //     } else {
    //         bomb.style.backgroundImage = "url('img/bomb.png')";
    
    //     }
    // }

    // function breakBlock(explosion) {

    //     var element = document.getElementsByClassName('wall-destruct');
    //     var wallDestructLeft = 0;
    //     var wallDestructTop = 0;
    
    //     for (var i = element.length - 1; i >= 0; i--) {
    
    //         wallDestructLeft = element[i].offsetLeft / 50;
    //         wallDestructTop = element[i].offsetTop / 50;
    
    //         if ((explosion.offsetTop / 50 == wallDestructTop) && (explosion.offsetLeft / 50 == wallDestructLeft)) {
    
    //             element[i].style.backgroundImage = "url('../medias/grass.svg')";
    
    //             if (grille[wallDestructTop][wallDestructLeft] == 3) {
    //                 grille[wallDestructTop][wallDestructLeft] = 1;
    
    //             }
    
    //         }
    //     }
    // }
