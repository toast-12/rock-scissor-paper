document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const playerChoice = event.target.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        const resultElement = document.getElementById('result');
        resultElement.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
        
        // Add animation class
        resultElement.classList.add('result-animation');
        
        // Remove the animation class after animation ends
        setTimeout(() => {
            resultElement.classList.remove('result-animation');
        }, 500);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    }
    if (
        (player === 'rock' && computer === 'scissor') ||
        (player === 'scissor' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'You win!';
    }
    return 'You lose!';
}
