    const cells = document.querySelectorAll(".cell");
    const result = document.querySelector(".result");
    const winnerText = document.getElementById("winner-text");
    const xScoreEl = document.getElementById("x-score");
    const oScoreEl = document.getElementById("o-score");

    let turn = "X";
    let board = ["", "", "", "", "", "", "", "", ""];

    let xScore = parseInt(localStorage.getItem("xScore")) || 0;
    let oScore = parseInt(localStorage.getItem("oScore")) || 0;

    xScoreEl.textContent = xScore;
    oScoreEl.textContent = oScore;

    cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleMove(cell, index));
    });

    function handleMove(cell, index) {
    if (board[index] !== "") return;

    board[index] = turn;
    cell.textContent = turn;
    cell.classList.add("filled", turn === "X" ? "x-mark" : "o-mark");

    if (checkWinner()) {
        updateScore(turn);
        showWinner(turn);
        setTimeout(resetGame, 3000);
        return;
    }

    if (board.every(cell => cell !== "")) {
        showWinner("draw");
        setTimeout(resetGame, 3000);
        return;
    }

    turn = turn === "X" ? "O" : "X";
    }

    function checkWinner() {
    const combos = [
        [0,1,2], [3,4,5], [6,7,8], // Rows
        [0,3,6], [1,4,7], [2,5,8], // Columns
        [0,4,8], [2,4,6]           // Diagonals
    ];

    return combos.some(combo => {
        const [a,b,c] = combo;
        return board[a] && board[a] === board[b] && board[b] === board[c];
    });
    }

    function updateScore(winner) {
    if (winner === "X") {
        xScore++;
        localStorage.setItem("xScore", xScore);
        xScoreEl.textContent = xScore;
    } else {
        oScore++;
        localStorage.setItem("oScore", oScore);
        oScoreEl.textContent = oScore;
    }
    }

    function showWinner(winner) {
    result.classList.add("show");
    if (winner === "draw") {
        winnerText.textContent = "It's a Draw!";
    } else {
        winnerText.textContent = `${winner} Wins! 🎉`;
        celebrate();
    }
    }

    function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    result.classList.remove("show");
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("filled", "x-mark", "o-mark");
    });
    }

    function resetScore() {
    xScore = 0;
    oScore = 0;
    localStorage.removeItem("xScore");
    localStorage.removeItem("oScore");
    xScoreEl.textContent = "0";
    oScoreEl.textContent = "0";
    }

    // 🎉 Celebration animation (using BOM + API)
    function celebrate() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);


    setTimeout(() => {
        confetti.remove();
    }, 2500);
    }

