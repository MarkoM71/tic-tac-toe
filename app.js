let gamePlay = (function() {
    
    const gameMessage = document.getElementById('message');
    let gameOn = true;
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const winMessage = () => `${currentPlayer} wins!`
    const tieMessage = "It's a tie";
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
    gameMessage.innerText = currentPlayerTurn();

    function handleClick(e) {
        const clickedBox = e.target;
        const clickedBoxNumber = parseInt(clickedBox.getAttribute('data-key'));

        if (gameBoard[clickedBoxNumber] !== "" || !gameOn) {
            return
        }

        gamePlay(clickedBox, clickedBoxNumber);
        gameResult();
    }

    function gamePlay(clickedElement, squareIndex) {
        gameBoard[squareIndex] = currentPlayer;
        clickedElement.innerText = currentPlayer;
    }

    function gameResult() {

        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        let gameWin = false;

        for (let i = 0; i <= 7; i++) {

            let a = gameBoard[winningCombos[i][0]];
            let b = gameBoard[winningCombos[i][1]];
            let c = gameBoard[winningCombos[i][2]];

            if (!a || !b || !c) {
                continue;
            }
            
            if (a === b && b === c) {
                gameWin = true;
                break;
            }
        }

        if (gameWin) {
            gameMessage.innerText = winMessage();
            gameOn = false;
            return;
        }

        let tieGame = !gameBoard.includes("");
        if (tieGame) {
            gameMessage.innerText = tieMessage;
            gameActive = false;
            return;
        }
        switchPlayer();
    }

    









return {handleClick}

})();

document.querySelectorAll('.box').forEach(box =>
    box.addEventListener('click', gamePlay.handleClick));