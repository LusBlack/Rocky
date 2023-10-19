
//this function initializes the game
const initGame = () => {
    const startGame = confirm("shall we play a game?");
    startGame ? playGame() : alert("ok, maybe next time.");
}
const playGame = () => {
    while(true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice) {
            if(!playerChoice) {
                invalidChoice();
                continue;
            }
            const computerChoice = getComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);
            displayResult(result);
            if(askToPlayAgain()) {
                continue;
            } else{
                thanksForPlaying();
                break;
            }
        }
    };

    const getPlayerChoice = () => {
        return prompt("please enter rock, paper, or scissors.");
    };

    const formatPlayerChoice = (playerChoice) => {
        if(playerChoice || playerChoice === "") {
            return playerChoice.trim().toLowerCase();
        } else {
            return false;
        }
    }
};

const decidedNotToPlay = () => {
    alert("Some other time then");
};

const evaluatePlayerChoice = (playerChoice) => {
    if(
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper or scissors");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];

  /*const getComputerChoice = (playerChoice) => {
        if (playerChoice === "rock") {
            return "paper"; // 
        } else if (playerChoice === "paper") {
            return "scissors"; // 
        } else if (playerChoice === "scissors") {
            return "rock"; //
        } else {
            // Handle invalid player choices here
            invalidChoice();
        }
    };*/

};

const determineWinner = (player, computer) => {
    const winner =
    player === computer
    ? "Tie game!"
    : player === "rock" && computer === "paper"
    ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
    : player === "paper" && computer === "scissors"
    ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
    : player === "scissors" && computer === "rock"
    ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
    : `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`;

    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play Again?");
};

const thanksForPLaying = () => {
    alert("Ok, thanks for playing");
};

initGame();
