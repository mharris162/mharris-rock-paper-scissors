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

//is call all the inner function
startGame();


};

//start the game function 

game();
