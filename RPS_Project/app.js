const game = () => {
	let pScore = 0;
	let cScore = 0;

	//Start the game

	const startGame = () => {
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playBtn.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};

	//Play game
	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');
		const computerHand = document.querySelector('.computer-hand');

		// Computer options
		const computerOptions = ['rock', 'paper', 'scissors'];

		options.forEach(option => {
			option.addEventListener('click', function(){
				//computer choice
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];

				// Call compare hands
				compareHands(this.textContent, computerChoice)
				
				//Update images
				playerHand.src = `./static/${this.textContent}.png`;
				computerHand.src = `./static/${computerChoice}.png`;
			});
		});
	};

	const compareHands = (playerChoice, computerChoice) => {
		const winner = document.querySelector('.winner');

		// Check for a tie
		if (playerChoice === computerChoice) {
			winner.textContent = "Tie!";
			return;
		}

		// Check for rock
		if (playerChoice === 'rock') {
			if (computerChoice === 'scissors') {
				winner.textContent = "You win!";
				return;
			}else{
				winner.textContent = "You Lose";
				return;
			}
		}
		// Check for paper
		if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = "You Lose";
				return;
			}else{
				winner.textContent = "You Win!";
				return;
			}
		}
		// Check for scissors
		if (playerChoice === 'scissors') {
			if (computerChoice === 'paper') {
				winner.textContent = "You win!";
				return;
			}else{
				winner.textContent = "You Lose";
				return;
			}
		}
	}

	startGame();
	playMatch();
	// updateScore();
};

game();