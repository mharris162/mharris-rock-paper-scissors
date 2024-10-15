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
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(options => {
        options.addEventListener('click', function(){
            /// computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
        });
    });

    const computerNumber = Math.floor(Math.random() * 3);
    computerOptions[computerNumber]
};

//is call all the inner function
startGame();
playMatch();

};

//start the game function 

game();
