
    // Declaration of Variables;
    let userChoice;
    let computerChoice;
    let roundResults = [];
    // Function to decide winner of single round...
    function roundPlay(computerChoice, userChoice){
        if (computerChoice ===userChoice){
            console.log(`User selected ${userChoice} and Computer selected ${computerChoice} so this round tied!`);
            return 'round tied';
        }
        else if (computerChoice ==='rock' && userChoice==='paper'){
            console.log(`User selected ${userChoice} and Computer selected ${computerChoice} so user Wins!`);
            return 'user wins';
        }
        else if (computerChoice ==='rock' && userChoice==='scissors'){
            console.log(`User selected ${userChoice} and Computer selected ${computerChoice} so Computer Wins!`);
            return 'computer wins';
        }
        else if (computerChoice ==='paper' && userChoice==='rock'){
            console.log(`User selected ${userChoice} and Computer selected ${computerChoice} so Computer Wins!`);
            return 'computer wins';
        }
        else if (computerChoice ==='paper' && userChoice==='scissors'){
            console.log(`User selected ${userChoice} and Computer selected ${computerChoice} so user Wins!`);
            return 'user wins';
        }
        else if (computerChoice ==='scissors' && userChoice==='rock'){
            console.log(`User selected ${userChoice} and Computer selected ${computerChoice} so user Wins!`);
            return 'user wins';
        }
        else if (computerChoice ==='scissors' && userChoice==='paper'){
            console.log(`User selected ${userChoice} and Computer selected ${computerChoice} so Computer Wins!`);
            return 'computer wins';
        }
    }
    function getComputerChoice(){
        let random = Math.floor(Math.random()*3);
        //console.log(`random numer ${random}`);
        let choices = ['rock', 'paper', 'scissors'];
        return choices[random];
    }
    // Loop to run 5 times to complete the game rounds...
    let userWins = 0;
    let computerWins = 0;
    let tied = 0;
    function playGame(){
    for (i=0; i<5; i++){
        userChoice = prompt("Enter your Choice for Rock Paper Scissors Game",'').toLowerCase();
        computerChoice = getComputerChoice().toLowerCase();
        let winner = roundPlay(computerChoice, userChoice);
        roundResults.push(winner);
        winner === 'user wins' ?
        userWins++:
        winner === 'computer wins'?
        computerWins++: tied++;
    }
    console.log("Here are the complete results:", roundResults);
    userWins === computerWins ?
    console("So, Game Tied!"):
    userWins > computerWins?
    console.log("Therefore User Wins the Game!"):
    console.log("Therefore Computer Wins the Game!");
}
playGame();
