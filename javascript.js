let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")
const userscorePara = document.querySelector("#userscore");
const compscorePara = document.querySelector("#compscore");
const genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

    // rock, paper , scissor


};

const showwiner = (userwin) => {
    if(userwin) {
        userscore++;
        userscorePara.innerText = userscore;
        console.log("you win");
        msg.innerText = "You Win";
       
    }
    else {
        compscore++;
        compscorePara.innerText = compscore;
        console.log("you lose");
        msg.innerText = "you lose";
    }

}

const drawgame = () => {
    console.log("game was draw./ as both are same");
    msg.innerText = "game was draw play again" ;
};


const playgame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice ===  compChoice ) {
        drawgame();
    }
    else {
        let userwin = true;
        if(userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;


        }
        else if( userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            userwin = compChoice === "rock" ? false : true;
        }

        showwiner(userwin);

    }
};



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
