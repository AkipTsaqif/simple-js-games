const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 0;
    }

    if (playerSelection === 'rock') {
        return computerSelection === 'scissors' ? 1 : -1;
    }

    if (playerSelection === 'paper') {
        return computerSelection === 'rock' ? 1 : -1;
    }

    if (playerSelection === 'scissors') {
        return computerSelection === 'paper' ? 1 : -1;
    }
}

const game = () => {
    let playerSelection;
    let computerSelection;
    let result;
    let score = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors?');
        computerSelection = computerPlay();

        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        if (!choices.map(choice => choice.toLowerCase()).includes(playerSelection)) {
            alert('Invalid choice! Please try again.');
            i--;
            continue;
        }

        result = playRound(playerSelection, computerSelection);

        if (result === 0) {
            alert(`It's a tie! You both chose ${playerSelection}.`);
        }

        if (result === 1) {
            alert(`You win! ${playerSelection} beats ${computerSelection}.`);
            score++;
        }

        if (result === -1) {
            alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
            score--;
        }

        alert(`Your score is ${score}.`);
    };

    alert(`Your final score is ${score}.`);
}

game();