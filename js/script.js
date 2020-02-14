let currentLocation = document.getElementById('currenLocation');

/*let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];*/

let enemyBattleShipLocation0 = [Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 10) + 1];
console.log(enemyBattleShipLocation0[0], enemyBattleShipLocation0[1])

let enemyBattleShipLocation1 = [Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 10) + 1];

    if (enemyBattleShipLocation0[0] == enemyBattleShipLocation1[0]) {
        enemyBattleShipLocation1[0] = Math.floor(Math.random() * 10) + 1;
        
    }

    if (enemyBattleShipLocation0[1] == enemyBattleShipLocation1[1]) {
        enemyBattleShipLocation1[1] = Math.floor(Math.random() * 10) + 1;
    }

    console.log(enemyBattleShipLocation1[0] + " " + enemyBattleShipLocation1[1]);

let enemyBattleShipLocation2 = [Math.floor(Math.random() * 10) + 1 , Math.floor(Math.random() * 10) + 1 ,1 ,1];

let j = 0;

for (let i = 2; i < 6; i++) {
    j++;
    enemyBattleShipLocation2[i] = enemyBattleShipLocation2[1] + j;
}

for (let i = 0; i < enemyBattleShipLocation2.length; i++) {
    console.log(enemyBattleShipLocation2[0] + " " + enemyBattleShipLocation2[i]);
}

let points = 0;

const battleShipLocations = document.querySelectorAll(".battleShipLocation");
console.log(battleShipLocations);
battleShipLocations.forEach((location) => {
    location.addEventListener("click", checkLocation);
});

function checkLocation() {
    let location = this.value.split(",");
    console.log(location[0]);
    console.log(location[1]);
    
    if (location[0] == enemyBattleShipLocation0[0] && location[1] == enemyBattleShipLocation0[1]) {

        console.log("Du träffade");

        this.disabled = true;
        
        this.style.backgroundColor = "green";
        
        points++;
    }

    if (location[0] == enemyBattleShipLocation1[0] && location[1] == enemyBattleShipLocation1[1]) {

        console.log("Du träffade");

        this.disabled = true;

        this.style.backgroundColor = "green";
        
        points++;
    }

    for (let i = 0; i < enemyBattleShipLocation2.length; i++) {
        if (location[0] == enemyBattleShipLocation2[0] && location[0] == enemyBattleShipLocation2[i]) {

        console.log("Du träffade");

        this.disabled = true;

        this.style.backgroundColor = "green";
        
        points++;
        }
    
    }

    if (location[0] == enemyBattleShipLocation2[0] && location[1] == enemyBattleShipLocation2[1] || location[0] == enemyBattleShipLocation2[0] && location[1] == enemyBattleShipLocation2[1]) {

        console.log("Du träffade");

        this.disabled = true;

        this.style.backgroundColor = "green";
        
        points++;
    }

    else {

        console.log("Du missade lmao sämst");
        this.disabled = true;

    }  

    if (points == 2) {

        console.log("Yay du vann du fick " + points + " poäng");
        document.getElementById('playAgain').style.display = "grid";
    }

    document.getElementById('currentLocation').innerHTML = location[0] + " " + location[1];
    document.getElementById('currentPoints').innerHTML = points;

}

const menuButtons = document.querySelectorAll(".menu");
menuButtons.forEach((location) => {
    location.addEventListener("click", checkButtons);
});

function checkButtons() {

    let menuButton = 0;
    
    menuButton = this.value;
    
    if (menuButton == 1) {
        document.getElementById('holder').style.display = "none";
        document.getElementById('playerBoard').style.display = "none";
        document.getElementById('gameRules').style.display = "grid";
        document.getElementById('gameRulesButton').style.display = "none";
    }

    if (menuButton == 2) {
        document.getElementById('holder').style.display = "none";
        document.getElementById('playerBoard').style.display = "grid";
        document.getElementById('gameRules').style.display = "none";
        document.getElementById('gameRulesButton').style.display = "flex";
    }

    if (menuButton == 3) {
        document.getElementById('gameRulesButton').style.display = "flex";
    }

    if (menuButton == 4) {
        document.getElementById('gameBoard').style.display = "grid";
        document.getElementById('playAgain').style.display = "none";
        document.getElementById('gameRulesButton').style.display = "flex";
    }

    if (menuButton == 5) {
        location.reload;
    }
}