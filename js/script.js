let currentLocation = document.getElementById('currenLocation');
let holder = document.getElementById('holder');
let playerBoard = document.getElementById('playerBoard');
let gameRules = document.getElementById('gameRules');
let gameRulesButton = document.getElementById('gameRulesButton');
let aboutUsButton = document.getElementById('aboutUsButton');
let aboutUs = document.getElementById('aboutUs');
let gameBoard = document.getElementById('gameBoard');
let currentPoints = document.getElementById('currentPoints')

let enemyBattleShipLocation2 = [Math.floor(Math.random() * 10) + 1 , Math.floor(Math.random() * 10) + 1 ,0 ,0 ,0];

let j = 0;

/*if (enemyBattleShipLocation2 == enemyBattleShipLocation0 || enemyBattleShipLocation2 == enemyBattleShipLocation1) {
        
    if (Math.random >= 0,5) {
        enemyBattleShipLocation2[0] = Math.floor(Math.random() * 10) + 1;
    }

    else {
        enemyBattleShipLocation2[1] = Math.floor(Math.random() * 10) + 1;
    }
}*/

for (let i = 2; i < 7; i++) {
    j++;
    
    enemyBattleShipLocation2[i] = enemyBattleShipLocation2[1] + j;

    if (enemyBattleShipLocation2[i] > 9) {
    enemyBattleShipLocation2[i] = enemyBattleShipLocation2[i] - j - 1;
    }

    if (enemyBattleShipLocation2[i] == enemyBattleShipLocation2[i-1]) {
        enemyBattleShipLocation2[i] -=j;
    }

    /*if (enemyBattleShipLocation2[i] < 1) {
        console.log(ånaj)
    }*/
    
}

//ship0
let enemyBattleShipLocation0 = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
console.log(enemyBattleShipLocation0[0], enemyBattleShipLocation0[1])
//ship1
let enemyBattleShipLocation1 = [Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 10) + 1];

    if (enemyBattleShipLocation0 == enemyBattleShipLocation1) {
        if (Math.random >= 0,5) {
            enemyBattleShipLocation1[0] = Math.floor(Math.random() * 10) + 1;
        }

        else {
            enemyBattleShipLocation1[1] = Math.floor(Math.random() * 10) + 1;
        }
    }
    console.log(enemyBattleShipLocation1[0] + " " + enemyBattleShipLocation1[1]);

for (let index = 1; index < 6; index++) {
    
    if (enemyBattleShipLocation2[0] == enemyBattleShipLocation0[0] && enemyBattleShipLocation2[1] == enemyBattleShipLocation0[index] || enemyBattleShipLocation2[0] == enemyBattleShipLocation1[0] && enemyBattleShipLocation2[1] == enemyBattleShipLocation1[index]) {
        
        if (Math.random >= 0,5) {
            enemyBattleShipLocation1[0] = Math.floor(Math.random() * 10) + 1;
        }

        else {
            enemyBattleShipLocation1[1] = Math.floor(Math.random() * 10) + 1;
        }
    }
}

for (let i = 1; i < 5; i++) {
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

    let hit = false;
    
    if (location[0] == enemyBattleShipLocation0[0] && location[1] == enemyBattleShipLocation0[1]) {

        this.disabled = true;
        
        this.style.backgroundColor = "green";
        
        points++;

        hit = true;
    }

    if (location[0] == enemyBattleShipLocation1[0] && location[1] == enemyBattleShipLocation1[1]) {

        this.disabled = true;

        this.style.backgroundColor = "green";
        
        points++;

        hit = true;
    }

    for (let i = 0; i < 4; i++) {

        if (location[0] == enemyBattleShipLocation2[0] && location[1] == enemyBattleShipLocation2[i]) {

        this.disabled = true;

        this.style.backgroundColor = "green";
        
        points++;

        hit = true;
        }
    }

    if (hit == true) {
        console.log("Du träffade");
    } 

    else {
        console.log("Du missade");

        this.disabled = true;
    }

    

    if (points == 6) {

        console.log("Yay du vann du fick " + points + " poäng");
        document.getElementById('playAgain').style.display = "grid";
    }

    document.getElementById('currentLocation').innerHTML = "Du sköt på " + location[0] + " , " + location[1];
    document.getElementById('currentPoints').innerHTML = "Du har " + points + " poäng";

}

const menuButtons = document.querySelectorAll(".menu");
menuButtons.forEach((location) => {
    location.addEventListener("click", checkButtons);
});

function checkButtons() {

    let menuButton;
    
    menuButton = this.value;
    
    if (menuButton == 1) {
        //holder.style.display = "none";
        //playerBoard.style.display = "none";
        gameRules.style.display = "grid";
        //gameRulesButton.style.display = "none";
    }

    if (menuButton == 2) {
        playerBoard.style.display = "grid";
        gameRulesButton.style.display = "grid";
    }

    if (menuButton == 3) {
        //aboutUsButton.style.display = "none";
        aboutUs.style.display = "grid";
    }

    if (menuButton == 4) {
        gameBoard.style.display = "grid";
        playAgain.style.display = "none";
        gameRulesButton.style.display = "grid";
    }

    if (menuButton == 5) {
        location.reload();
    }
}