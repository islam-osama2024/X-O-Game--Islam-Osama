# XO Game

A two-player tic-tac-toe (XO) game that runs in the browser. Built with plain HTML, CSS and JavaScript, no frameworks and no build step.

**Play it:** https://islam-osama2024.github.io/X-O-Game--Islam-Osama/

## How it plays

- Players take turns on a 3x3 board. X always starts.
- Click an empty cell to place your mark. A taken cell can't be changed.
- The game checks all 3 rows, 3 columns and 2 diagonals after every move.
- A win shows the winner (with confetti), a full board with no winner shows a draw. The board resets by itself after 3 seconds.
- The score board counts X and O wins and is saved in the browser (localStorage), so it survives a page refresh. The **Reset Score** button sets both back to 0.

## Run it locally

No install needed. Download the repository and open `index.html` in a browser.

## Files

| File | What it does |
| --- | --- |
| `index.html` | Page structure, board, score board and result message |
| `style.css` | Layout, colours, cell hover and mark animations |
| `js.js` | Game logic: turns, win and draw check, score saving, reset |
| `favicon.svg` | Browser tab icon |

The win celebration uses the [canvas-confetti](https://github.com/catdad/canvas-confetti) library, loaded from a CDN, so confetti needs an internet connection.

## Author

Islam Osama
