const questionsPool = [
  {
    question: "What is Plasma?",
    options: ["Fruit", "Blockchain scaling solution", "Car", "Planet"],
    answer: "Blockchain scaling solution"
  },
  {
    question: "Stablecoin means?",
    options: ["Volatile coin", "Stable value coin", "Joke token", "Stock"],
    answer: "Stable value coin"
  },
  {
    question: "PlasmaFDN is building ____?",
    options: ["Game", "Stablecoin Chain", "Book", "Phone"],
    answer: "Stablecoin Chain"
  },
  {
    question: "How many questions are in the real quiz?",
    options: ["10", "20", "30", "40"],
    answer: "20"
  },
  {
    question: "Where will we host?",
    options: ["AWS", "Vercel", "Google Drive", "Nowhere"],
    answer: "Vercel"
  }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

function startQuiz() {
  selectedQuestions = questionsPool.sort(() => 0.5 - Math.random()).slice(0, 20);
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  selectedOption = null;
  document.getElementById("result").innerText = "";

  const questionObj = selectedQuestions[currentQuestionIndex];
  document.getElementById("question").innerText = questionObj.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  questionObj.options.forEach(option => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = option;
    div.onclick = () => selectOption(div, option);
    optionsDiv.appendChild(div);
  });
}

function selectOption(div, option) {
  selectedOption = option;
  document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
  div.classList.add("selected");
}

function nextQuestion() {
  if (!selectedOption) {
    alert("Please select an option first.");
    return;
  }

  const current = selectedQuestions[currentQuestionIndex];
  if (selectedOption === current.answer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  document.getElementById("quiz-container").innerHTML = `
      <h2>You scored ${score} out of ${selectedQuestions.length}</h2>
  `;
}

startQuiz();