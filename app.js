const game = () => {
    let p$core = 0;
    let c$core = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
    });

};

//play match

const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(options => {
        options.addEventListener("click", function() {
            /// computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

             compareHands(this.textContent, computerChoice);

            //update images
            playerHand.src = `./assets/${this.textContent}.png`; ///something wrong with code- makes player hands disappear
            computerHand.src = `./assets/${computerChoice}.png`;
        });
    });

};

 // where we call to compare hands 

const compareHands = (playerChoice, computerChoice) =>{
    //update text
    const winner = document.querySelector('.winner');

    //text for a tie
    if (playerChoice === computerChoice){
        winner.textContent = 'It is a tie';
        return;
    }

    //text for rock

    if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Player Wins';
            return;
        }else{
            winner.textContent = 'Computer Wins';
            return;
        } 
}
// text for paper

    if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Computer Wins';
            return;
        }else{
            winner.textContent = 'Player Wins';
            return;
        } 
    }

// text for scissors

if(playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
            winner.textContent = 'Player Wins';
            return;
        }else{
            winner.textContent = 'Computer Wins';
            return;
        } 
    }

}

//is call all the inner function
startGame();
playMatch();

};

//start the game function 

game();
