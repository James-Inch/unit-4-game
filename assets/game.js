


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
$(document).ready(function () {

    // State Management variable will hold game info to be push to html...
    var wins = 0;
    var losses = 0;
    var score = 0;

    // These four variables select the random numbers that are assigned to each crystal... 
    var crystal1 = Math.floor(Math.random() * 14) + 1;
    
    var crystal2 = Math.floor(Math.random() * 14) + 1;
    
    var crystal3 = Math.floor(Math.random() * 14) + 1;
    
    var crystal4 = Math.floor(Math.random() * 14) + 1;
    
    // these were just to check to see if my random math was working... They will go away...
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    // This gives us our target number...
    var targetNumber = Math.floor(Math.random() * 49) + 50;
    console.log(targetNumber);
    
    // This writes the target number to the page
    $("#number").append(targetNumber);


    $("#amethyst").click(function() {
        scoreKeeper(crystal1)
        checkScore();
    });

    $("#citrine").click(function() {
        scoreKeeper(crystal2)
        checkScore();
    });

    $("#sodalite").click(function() {
        scoreKeeper(crystal3);
        checkScore();
    });

    $("#smoky-quarts").click(function() {
        scoreKeeper(crystal4);
        checkScore();
    });

    function scoreKeeper(crystal) {
        score += crystal
        $("#score").html("Your score is: " + score);
    };

    function checkScore() {
        if (score === targetNumber) {
            wins += 1;
            score = 0;
            $("#score").html("Your score is: " + score);
            $("#wins").html("Wins: " + wins);
            $("#number").html(targetNumber);
        } else if (score > targetNumber) {
            losses += 1;
            score = 0;
            $("#score").html("Your score is: " + score);
            $("#losses").html("Losses: " + losses);
            $("#number").html(targetNumber);
        }
    };

    
});



