
// Simple Snake Game Logic (Text-based Demo)

// Board size
const BOARD_SIZE = 10;

// Snake and food state
let snake = [{ x: 5, y: 5 }];
let direction = { x: 0, y: 1 }; // moving right
let food = { x: 2, y: 2 };

// Print the board
function printBoard() {
    let board = Array.from({ length: BOARD_SIZE }, () =>
        Array.from({ length: BOARD_SIZE }, () => ".")
    );
    // Place food
    board[food.y][food.x] = "F";
    // Place snake
    snake.forEach((segment, idx) => {
        board[segment.y][segment.x] = idx === 0 ? "S" : "s";
    });
    console.clear();
    board.forEach(row => console.log(row.join(" ")));
}

// Move the snake
function moveSnake() {
    const newHead = {
        x: (snake[0].x + direction.x + BOARD_SIZE) % BOARD_SIZE,
        y: (snake[0].y + direction.y + BOARD_SIZE) % BOARD_SIZE
    };
    snake.unshift(newHead);
    // Eat food
    if (newHead.x === food.x && newHead.y === food.y) {
        food = {
            x: Math.floor(Math.random() * BOARD_SIZE),
            y: Math.floor(Math.random() * BOARD_SIZE)
        };
    } else {
        snake.pop();
    }
}


function randomDirection() {
    const dirs = [
        { x: 0, y: 1 },  // going right
        { x: 1, y: 0 },  // going down
        { x: 0, y: -1 }, // going left
        { x: -1, y: 0 }  // going up
    ];

    console.log("Feature A: Changing direction...");
    console.log("Feature B: Randomly choosing a direction...");
    direction = dirs[Math.floor(Math.random() * dirs.length)];



// Main loop
let steps = 0;
const interval = setInterval(() => {
    moveSnake();
    printBoard();
    randomDirection();
    steps++;
    if (steps > 20) clearInterval(interval);
}, 500);
