let box = document.createElement("div");
let gameOverDiv = document.getElementById("gameOver");
let gameNode = document.getElementById("game");
let gameSettingsNode = document.getElementById("gameSettings");
let score = document.getElementById("score");
let finalScore = document.getElementById("final-score");
let computedBoxSize;
let coordinates = {};

box.style.left = coordinates.x + "px";
box.style.top = coordinates.y + "px";
box.classList.add("box");

const initGame = () => {
  let boxSizeNode = document.getElementById("boxSize");
  box.style.height = boxSizeNode.value + "px";
  box.style.width = boxSizeNode.value + "px";
  computedBoxSize = boxSizeNode.value;

  setTimeout(() => {
    gameSettingsNode.style.display = "none";
    gameNode.style.display = "block";
    coordinates.x = Math.random() * (1300 - computedBoxSize);
    coordinates.y = Math.random() * (600 - computedBoxSize);
    box.style.left = coordinates.x + "px";
    box.style.top = coordinates.y + "px";
    console.log(coordinates);
    game();
    gameOverDiv.style.display = "none";
  }, 0);
};

const game = () => {
  finalScore.innerHTML = "0";
  score.innerHTML = "0";

  document.body.addEventListener("click", function listener(e) {
    console.log("hi");

    if (e.target.classList.contains("box")) {
      console.log("wow");
      coordinates.x = Math.random() * (1300 - computedBoxSize);
      coordinates.y = Math.random() * (600 - computedBoxSize);
      console.log(coordinates.y);
      box.style.left = coordinates.x + "px";
      box.style.top = coordinates.y + "px";
      score.innerHTML = parseInt(score.innerHTML) + 1;
    } else {
      console.log("lost");
      finalScore.innerHTML = score.innerHTML;
      gameOverDiv.style.display = "flex";
      document.body.removeEventListener("click", listener);
    }
  });
};

function resetGame(e) {
  setTimeout(() => {
    initGame();
    gameOverDiv.style.display = "none";
  }, 0);
}
gameNode.append(box);
