var p1_btn = document.getElementById('p1_btn');
var p2_btn = document.getElementById('p2_btn');

var p1_span = document.querySelector('#p1_span');
var p2_span = document.querySelector('#p2_span');

var scoreInput = document.querySelector('input');
var winningScoreSpan = document.querySelector('p span');

var reset_btn = document.getElementById('reset_btn');



var p1_score = 0;
var p2_score = 0;

var winningScore = 5; // the max score. When reached, game over.
var gameOver = false;

p1_btn.addEventListener('click', () => {
    if (!gameOver) {
        p1_score++;
        if (p1_score === winningScore) {
            p1_span.classList.add('winner');
            gameOver = true;
        }
        p1_span.textContent = p1_score;
    }
});

p2_btn.addEventListener('click', () => {
    if (!gameOver) {
        p2_score++;
        if (p2_score === winningScore) {
            gameOver = true;
            p2_span.classList.add('winner');
        }
        p2_span.textContent = p2_score;
    }
});

reset_btn.addEventListener('click', () => {
    reset();
});

function reset() {
    p1_score = 0;
    p2_score = 0;
    p1_span.textContent = p1_score;
    p2_span.textContent = p2_score;
    p1_span.classList.remove('winner');
    p2_span.classList.remove('winner');

    gameOver = false;
}

scoreInput.addEventListener('change', () => {
    var inputWinningScore = Number(scoreInput.value);
    winningScore = inputWinningScore;
    winningScoreSpan.textContent = scoreInput.value;
    
    reset();
});
