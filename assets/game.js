$(document).ready(function () {

    // State Management variable will hold game info to be push to html...
    var wins = 0;
    var losses = 0;
    var score = 0;


    // This gives us our target number...
    var targetNumber = Math.floor(Math.random() * 49) + 50;
    // This writes the target number to the page...
    $("#number").html(targetNumber);
    console.log(targetNumber);
    
    // These four variables select the random numbers that are assigned to each crystal... 
    var crystal1 = Math.floor(Math.random() * 14) + 1;
    var crystal2 = Math.floor(Math.random() * 14) + 1;
    var crystal3 = Math.floor(Math.random() * 14) + 1;
    var crystal4 = Math.floor(Math.random() * 14) + 1;
    
    // these were just to check to see if my random math was working... Now they are for cheating...
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    // These functions call the scoreKeeper and checkScore functions when the crytal buttons are clicked...
    $("#amethyst").click(function() {
        scoreKeeper(crystal1);
        checkScore();
    });

    $("#citrine").click(function() {
        scoreKeeper(crystal2);
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

    // This function takes the value of each crystal and adds it to the score...
    function scoreKeeper(crystal) {
        score += crystal
        $("#score").html("Your score is: " + score);
    };

    // This function will reset the score, add to wins or losses and write the appropriate info to the html...
    function checkScore() {
        if (score === targetNumber) {
            wins += 1;
            score = 0;
            $("#score").html("Your score is: " + score);
            $("#wins").html("Wins: " + wins);
            reset();
        } else if (score > targetNumber) {
            losses += 1;
            score = 0;
            $("#score").html("Your score is: " + score);
            $("#losses").html("Losses: " + losses);
            reset();
        }
    };  

    // Reset values of crystals and target...   
    function reset(){
        var targetNumber = Math.floor(Math.random() * 49) + 50;
        console.log(targetNumber);
        $("#number").html(targetNumber);
        crystal1 = Math.floor(Math.random() * 14) + 1;
        crystal2 = Math.floor(Math.random() * 14) + 1;
        crystal3 = Math.floor(Math.random() * 14) + 1;
        crystal4 = Math.floor(Math.random() * 14) + 1;
        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);
    };
});