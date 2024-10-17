const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
        });
    };

//play match

const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll('.hands img');

    /// also not working 
    hands.forEach(hand => {
        hand.addEventListener('animatioend', function(){
            this.style.animation = "";
        });

    });

    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
        option.addEventListener("click", function() {
            /// computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
        
            // where we call to compare hands
            setTimeout(() => {
                compareHands(this.textContent, computerChoice);
                playerHand.src = `./assets/${this.textContent}.png`; ///something wrong with code- makes player hands disappear
                computerHand.src = `./assets/${computerChoice}.png`;

            }, 2000);

            //compareHands(this.textContent, computerChoice);//something wrong with code- does not change text- guessing has to do with this?

            //update images
            //playerHand.src = `./assets/${this.textContent}.png`; ///something wrong with code- makes player hands disappear
            //computerHand.src = `./assets/${computerChoice}.png`;


            //animation
           playerHand.style.animation = "shakePlayer 2s ease";
           computerHand.style.animation = "shakeComputer 2s ease";
        });
    });

};

//update score
 const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
 };


 // where we call to compare hands 

const compareHands = (playerChoice, computerChoice) => {
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
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Computer Wins';
            cScore++; 
            updateScore();
            return;
        } 
}
// text for paper

    if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Computer Wins';
            cScore++; 
            updateScore();
            return;
        }else{
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        } 
    }

// text for scissors

if(playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore(); 
            return;
        } 
    }

};

//is call all the inner function
startGame();
playMatch();

};

//start the game function 

game();
