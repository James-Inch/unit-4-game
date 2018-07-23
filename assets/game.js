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

var crystal1 = Math.floor(Math.random() * 14) + 1;
console.log(crystal1);

var crystal2 = Math.floor(Math.random() * 14) + 1;
 console.log(crystal2);

var crystal3 = Math.floor(Math.random() * 14) + 1;
console.log(crystal3);

var crystal4 = Math.floor(Math.random() * 14) + 1;
console.log(crystal4);



$(document).ready(function() {
    var targetNumber = Math.floor(Math.random() * 49) + 50;
    console.log(targetNumber);

    $("#number").append(targetNumber);





    $("#amethyst").click(function(){
        scoreKeeper(crystal1)
    });
    $("#citrine").click(function(){
        scoreKeeper(crystal2)
    });

    $("#sodalite").click(function(){
        scoreKeeper(crystal3)
    });

    $("#smoky-quarts").click(function(){
        scoreKeeper(crystal4)
    });

    function scoreKeeper(crystal){
        score += crystal
        $("#score").html(score)
    };

    if (score === targetNumber){
        wins += 1;
        score = 0;
        $("#score").html(score)
        $("#wins").html(wins)
    } else if (score > targetNumber){
        losses += 1;
        $("#score").html(score)
    }


    // function reset(){

    // }
});



