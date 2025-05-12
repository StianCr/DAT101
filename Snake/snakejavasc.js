const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const tileSize = 20;
const gridSize = canvas.width / tileSize;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 1, y: 0 }; // starter mot høyre
let food = spawnFood();
let gameOver = false;

function draw() {
  if (gameOver) return;

}
{

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
    }
    function drawSnake() {
      ctx.fillStyle = "green";
      snake.forEach((segment) => {
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
      });
    }