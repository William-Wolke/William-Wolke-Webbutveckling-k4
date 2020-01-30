let enemyBattleShipLocation0 = [Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 10) + 1];
console.log(enemyBattleShipLocation0[0], enemyBattleShipLocation0[1])

let enemyBattleShipLocation1 = [Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 10) + 1];
console.log(enemyBattleShipLocation1[0], enemyBattleShipLocation1[1])

    if (enemyBattleShipLocation0[0] == enemyBattleShipLocation1[0]) {
        enemyBattleShipLocation1[0] = Math.floor(Math.random() * 10) + 1;
        console.log("Newlocation1x" + " " + enemyBattleShipLocation1[0])
    }

    if (enemyBattleShipLocation0[1] == enemyBattleShipLocation1[1]) {
        enemyBattleShipLocation1[1] = Math.floor(Math.random() * 10) + 1;
        console.log("Newlocation1y"+ " " + enemyBattleShipLocation1[1])
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
        console.log("Hej, du träffade")
        this.disabled = true;
        points++;
    }

    if (location[0] == enemyBattleShipLocation1[0] && location[1] == enemyBattleShipLocation1[1]) {
        console.log("Hej, du träffade")
        this.disabled = true;
        points++;
    }

    if (location[0] != enemyBattleShipLocation0[0] || location[1] != enemyBattleShipLocation0[1]) {
        console.log("Hej, du träffade")
        this.disabled = true;
        points++;
    }

    if (location[0] != enemyBattleShipLocation1[0] || location[1] != enemyBattleShipLocation1[1]) {
        console.log("Hej, du träffade")
        this.disabled = true;
        points++;
    }    

    if (points == 2) {
        console.log("Yay du vann du fick " + points + " poäng")
    }

}