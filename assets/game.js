/* Set up State management variables
    wins:
    losses:
    targetNumber:
    crystal1:
    crystal2:
    crystal3:
    crystal4:
    userScore:

startGame(){
    The target number is grnerated
    user score is set to 0
    each crystal is given a new value
    wins/losses appended accordingly 
}

if userScore === targetNumber{
    wins++;
    userScore = 0;
    reset crystals values;
}

if userScore >== targetNumber{
    losses++;
    userScore = 0;
    reset crystals vlues;
}



*/
 



var targetNumber = Math.floor(Math.random() * 99) + 1;
 console.log(targetNumber)

