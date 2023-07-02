document.addEventListener("DOMContentLoaded", function() {
  var targetKeyElement = document.getElementById("targetKey");
  var keyboardKeyElement = document.getElementById("keyboardKey");
  var timerElement = document.getElementById("timer");
  var scoreElement = document.getElementById("scoreValue");
  var uppercase = document.getElementById("uppercase");
  var lowercase = document.getElementById("lowercase");
  var numbers = document.getElementById("numbers");
  var symbols = document.getElementById("symbols");
  var score = 0;
  var timer;
  
  function getRandomKey() {

    var keys = "";

    if (uppercase.checked) {
      keys += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase.checked) {
      keys += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers.checked) {
      keys += "0123456789";
    }
    if (symbols.checked) {
      keys += "~!@#$%^&*()_+{}|:<>?`-=[]\\;',./";
    }

    if (keys === "") {
      keys += "abcdefghijklmnopqrstuvwxyz";
      lowercase.checked = true;
    }

    return keys.charAt(Math.floor(Math.random() * keys.length));
  }
  
  function updateTimer(time) {
    timerElement.textContent = time;
  }
  
  function updateScore() {
    scoreElement.textContent = score;
  }
  
  function startGame() {
    var targetKey = getRandomKey();
    targetKeyElement.textContent = targetKey;
    keyboardKeyElement.textContent = targetKey;
    updateTimer(15);
    
    timer = setInterval(function() {
      var time = parseInt(timerElement.textContent);
      
      if (time > 0) {
        time--;
        updateTimer(time);
        timerElement.style.width = time * 10 + "px";
      } else {
        clearInterval(timer);
        startGame();
      }
    }, 1000);
  }
  
  document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    var targetKey = targetKeyElement.textContent;
    
    if (keyPressed === targetKey) {
      clearInterval(timer);
      score += parseInt(timerElement.textContent);
      updateScore();
      startGame();
    }
  });
  
  startGame();
});
