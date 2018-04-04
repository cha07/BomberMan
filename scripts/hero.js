var grille = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

function afficherMap() {

    var x, y = 0;
    var wall;
    var wallDestruct;
    var floor;
    var hero = document.querySelector('#hero');

    for (x = 0; x < 17; x++) {

        for (y = 0; y < 11; y++) {

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
                wallDestruct.style.backgroundImage = "url('../medias/rocher.svg')";

            } else if (grille[y][x] === 1) {

                floor = document.createElement("div");
                floor.setAttribute("class", "floor");
                map.appendChild(floor);
                floor.style.top = y * 50 + "px";
                floor.style.left = x * 50 + "px";

            }
        }
    }
}

afficherMap();


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

                    var audio = new Audio('../medias/bombdrop.wav');
                    audio.play();

                    setTimeout(exploseTheBomb, 3000);
                    setTimeout(suppexplosion, 4000);

                }
                break;
        }
    }
})