let playerName = "";
let currentQuestion = 0;
let score = 0;

const totalQuestions = 20;

let currentA = 0;
let currentB = 0;

function startQuiz() {

    playerName =
        document.getElementById("playerName").value;

    if (!playerName) {
        alert("Välj ett namn");
        return;
    }

    document
        .getElementById("start-screen")
        .classList.add("hidden");

    document
        .getElementById("quiz-screen")
        .classList.remove("hidden");

    nextQuestion();
}

function nextQuestion() {

    currentA = randomNumber(1, 10);
    currentB = randomNumber(1, 10);

    document.getElementById("questionNumber")
        .innerText = currentQuestion + 1;

    document.getElementById("questionText")
        .innerText =
        `${currentA} × ${currentB}`;

    document.getElementById("answerInput")
        .value = "";

    document.getElementById("answerInput")
        .focus();
}

function submitAnswer() {

    const answer =
        Number(
            document.getElementById("answerInput").value
        );

    if (answer === currentA * currentB) {
        score += 5;
    }

    currentQuestion++;

    if (currentQuestion >= totalQuestions) {
        finishQuiz();
        return;
    }

    nextQuestion();
}

function finishQuiz() {

    document
        .getElementById("quiz-screen")
        .classList.add("hidden");

    document
        .getElementById("result-screen")
        .classList.remove("hidden");

    document.getElementById("resultText")
        .innerHTML =
        `
        ${playerName}<br><br>
        Poäng: ${score} av 100
        `;

    saveResult();
}

function saveResult() {

    console.log({
        namn: playerName,
        poäng: score,
        datum: new Date().toISOString()
    });

    /*
    Här kommer senare
    Google Sheet/Firebase-koppling
    */
}

function randomNumber(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}
