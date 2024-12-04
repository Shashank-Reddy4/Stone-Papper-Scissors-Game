let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#you");
const compScorepara = document.querySelector("#bot");

const genCompGame = () => {
    const options = ["rock", "papper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was a Draw! Please play again";
    msg.style.backgroundColor = "#0D1B2A";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorepara.innerText = compScore
        msg.innerText = `Bot Won! Bot ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    const compChoice = genCompGame();
    if (userChoice === compChoice) {
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "papper" ? false : true;
        }else if (userChoice === "papper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
} 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    });
});