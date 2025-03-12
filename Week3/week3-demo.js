// WEEK 3 DEMO: 
/*
Task: write a function, walkToTreasure, that takes in x and y coordinates on a beach 
and “walks” to the location of the treasure buried in the sand. 
*/

walkToTreasure(0,0);

function walkToTreasure(x, y) {
    var treasureX = 3;
    var treasureY = 9;

    // find x
    while (x != treasureX) {
        if (x < treasureX) {
            x++;
            console.log("Moving right");
        } else {
            x--;
            console.log("Moving left");
        }
    }

    // find y
    while (y != treasureY) {
        if (y < treasureY) {
            y++;
            console.log("Moving up");
        } else {
            y--;
            console.log("Moving down");
        }
    }

    console.log("Found Treasure");
}