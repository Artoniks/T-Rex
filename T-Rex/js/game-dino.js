alert("Ви готові?");

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const btn = document.getElementById('btn');


btn.addEventListener('click', function(event) {
    btn.value == "Stop" ? stop() : isAlive = gameStart();
    this.blur();
  });


 function gameStart () {
    btn.value = "Stop";
    btn.style.background = "green";
    cactus.style.animationPlayState = 'running'; 
  
  }
 
document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 500);
}

// перевіряємо зіткнення
function checkCollision() {
    let dinoRect = dino.getBoundingClientRect();
    let cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.bottom >= cactusRect.top &&
        dinoRect.right >= cactusRect.left &&
        dinoRect.left <= cactusRect.right
    ) {
        clearInterval(gameInterval);
        alert("Game Over!");
        window.location.reload();
    }
}

checkCollision();

let gameInterval = setInterval(function () {
    checkCollision();
}, 10);

function stop(){
    btn.value = "Start";
    btn.style.background = "red";
    cactus.style.animationPlayState = 'paused';
  }
 