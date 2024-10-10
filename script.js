document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const playerChoice = event.target.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        document.getElementById('result').textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor']; // Possible choices
    const randomIndex = Math.floor(Math.random() * choices.length); // Random index
    return choices[randomIndex]; // Return random choice
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
