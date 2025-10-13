const snakeId = document.getElementById('snake');
const frogId = document.getElementById('frog');
let score = 0;

const moveSnake = (event) => {
    // move snake from keyboard arrow and WASD
    const key = event.key;
    switch(key) {
        case 'ArrowUp':
        case 'w':
            snakeId.style.top = `${snakeId.offsetTop - 10}px`;
            break;
        case 'ArrowDown':
        case 's':
            snakeId.style.top = `${snakeId.offsetTop + 10}px`;
            break;
        case 'ArrowLeft':
        case 'a':
            snakeId.style.left = `${snakeId.offsetLeft - 10}px`;
            break;
        case 'ArrowRight':
        case 'd':
            snakeId.style.left = `${snakeId.offsetLeft + 10}px`;
            break;
        case ' ':
            frogJump();
            break;
    }
    // eat frog
    eatFrog();
}

function frogJump() {
    const randomX = Math.floor(Math.random() * 300);
    const randomY = Math.floor(Math.random() * 300);
    frogId.style.left = `${randomX}px`;
    frogId.style.top = `${randomY}px`;
}

function eatFrog(){
    const snakeArea = snakeId.getBoundingClientRect();
    const frogArea = frogId.getBoundingClientRect();
    if(snakeArea.x < frogArea.x + frogArea.width &&
        snakeArea.x + snakeArea.width > frogArea.x &&
        snakeArea.y < frogArea.y + frogArea.height &&
        snakeArea.y + snakeArea.height > frogArea.y) {
        score++;
        document.getElementById('score').innerText = score;
        frogJump();
        snakeId.style.fontSize = `${score + 25}px`;
    }
}

document.addEventListener('keydown', moveSnake);
// jump frog every 10s
setInterval(frogJump, 1000 * 10);
