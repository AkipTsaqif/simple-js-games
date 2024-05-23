const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const getPlayerGuess = () => {
    let guess;

    do {
        guess = parseInt(prompt("Enter your guess number:"));
        if (isNaN(guess)) {
            alert("Please enter a valid number.");
        }
    } while (isNaN(guess));

    return guess;
}

const checkGuess = (player, correct) => {
    if (player === correct) {
        return true;
    } else if (player > correct) {
        alert("Too high!");
    } else {
        alert("Too low!");
    }

    return false;
}

const game = () => {
    const correctNumber = generateRandomNumber();
    let playerGuess;
    let attempts = 0;

    do {
        playerGuess = getPlayerGuess();
        attempts++;
    } while (!checkGuess(playerGuess, correctNumber) && attempts < 10);

    if (attempts === 10) {
        alert("You have used all your attempts! You lose!");
    } else {
        alert(`You win! It took you ${attempts} attempts.`);
    }

}

game();