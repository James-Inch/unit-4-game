/* Set up State management variables
    wins:
    losses:
    targetNumber:
    crystal1:
    crystal2:
    crystal3:
    crystal4:
    userScore:
*/

 
// startGame(){
//     The target number is generated
//     score is set to 0
//     each crystal is given a new value
//     wins/losses appended accordingly 
// }

// if userScore === targetNumber{
//     wins++;
//     userScore = 0;
//     reset crystals values;
// }

// if userScore >== targetNumber{
//     losses++;
//     userScore = 0;
//     reset crystals vlues;
// }
var wins = 0;
var losses = 0; 
var score = 0;
$(document).ready(function() {
    var targetNumber = Math.floor(Math.random() * 99) + 50;
    console.log(targetNumber);

    $("#number").append(targetNumber);

    $("#amethyst").click(function(){
        console.log(crystal1)
        $("#score").append(crystal1 + score);
    });
});

var crystal1 = Math.floor(Math.random() * 29) + 1;
console.log(crystal1);

var crystal2 = Math.floor(Math.random() * 29) + 1;
 console.log(crystal2);

var crystal3 = Math.floor(Math.random() * 29) + 1;
console.log(crystal3);

var crystal4 = Math.floor(Math.random() * 29) + 1;
console.log(crystal4);

