const questions = [
  {
    question: "1.What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HighText Machine Language", correct: false },
      { text: "HyperTransfer Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "2.Which tag is used to insert an image?",
    answers: [
      { text: "A. <image>", correct: false },
      { text: "B. <img>", correct: true },
      { text: "C. <src>", correct: false },
      { text: "D. <pic>", correct: false },
    ],
  },

  {
    question: "3.Which tag creates a line break?",
    answers: [
      { text: "A. <lb>", correct: false },
      { text: "B. <break>", correct: false },
      { text: "C. <br>", correct: true },
      { text: "D. <hr>", correct: false },
    ],
  },
  {
    question: "4.Which attribute provides alternate text for an image?",
    answers: [
      { text: "A. title", correct: false },
      { text: "B. src", correct: false },
      { text: "C. alt", correct: true },
      { text: "D. href", correct: false },
    ],
  },

  {
    question: "5.Which tag is used to create a table row?",
    answers: [
      { text: "A. <tb>", correct: false },
      { text: "B. <th>", correct: false },
      { text: "C. <tr>", correct: true },
      { text: "D. <table>", correct: false },
    ],
  },

  {
    question: "6.Which HTML element is used for the main content?",
    answers: [
      { text: "A. <section>", correct: false },
      { text: "B. <article>", correct: false },
      { text: "C. <main>", correct: true },
      { text: "D. <content>", correct: false },
    ],
  },

  {
    question: "7.Which tag is used to create a form?",
    answers: [
      { text: "A. <input>", correct: false },
      { text: "B. <form>", correct: true },
      { text: "C. <fieldset>", correct: false },
      { text: "D. <lable>", correct: false },
    ],
  },

  {
    question: "8.What is the correct HTML for a checkbox?",
    answers: [
      { text: "A. <input type= check> ", correct: false },
      { text: "B. <checkbox>", correct: false },
      { text: "C. <input type= checkbox>", correct: true },
      { text: "D. <check>", correct: false },
    ],
  },

  {
    question: "9.Which tag defines a list item?",
    answers: [
      { text: "A. <ul>", correct: false },
      { text: "B. <ol>", correct: false },
      { text: "C. <li>", correct: true },
      { text: "D. <list>", correct: false },
    ],
  },

  {
    question: "10.Which tag is used to define metadata?",
    answers: [
      { text: "A. <meta>", correct: true },
      { text: "B. <data>", correct: false },
      { text: "C. <info>", correct: false },
      { text: "D. <head>", correct: false },
    ],
  },

  {
    question: "11.What does CSS stand for?",
    answers: [
      { text: "A. Colorful Style Sheets", correct: false },
      { text: "B. Cascading Style Sheets", correct: true },
      { text: "C. Creative Style Sheets", correct: false },
      { text: "D. Computer Style Sheets", correct: false },
    ],
  },

  {
    question: "12.Which property is used to change text color?",
    answers: [
      { text: "A. font-color", correct: false },
      { text: "B. text-color", correct: false },
      { text: "C. color", correct: true },
      { text: "D. style", correct: false },
    ],
  },

  {
    question: "13.Which CSS property controls space inside an element?",
    answers: [
      { text: "A. margin", correct: false },
      { text: "B. border", correct: false },
      { text: "C. padding", correct: true },
      { text: "D. spacing", correct: false },
    ],
  },

  {
    question:
      "14.Which value makes an element invisible but still takes space?",
    answers: [
      { text: "A. display: none", correct: false },
      { text: "B. visibility: hidden", correct: true },
      { text: "C. opacity: 0", correct: false },
      { text: "D. hidden", correct: false },
    ],
  },

  {
    question: "15.Which CSS layout is best for two-dimensional design?",
    answers: [
      { text: "A. Flexbox", correct: false },
      { text: "B. Float", correct: false },
      { text: "C.Grid", correct: true },
      { text: "D. Inline", correct: false },
    ],
  },

  {
    question: "16.Which property is used to make text bold?",
    answers: [
      { text: "A. font-weight", correct: true },
      { text: "B. text-style", correct: false },
      { text: "C. bold", correct: false },
      { text: "D. font-style", correct: false },
    ],
  },

  {
    question:
      "17.Which position value places an element relative to the viewport?",
    answers: [
      { text: "A. relative", correct: false },
      { text: "B. absolute", correct: false },
      { text: "C. fixed", correct: true },
      { text: "D. sticky", correct: false },
    ],
  },

  {
    question: "18.Which symbol is used for class selector?",
    answers: [
      { text: "A. #", correct: false },
      { text: "B. .", correct: true },
      { text: "C. *", correct: false },
      { text: "D. @", correct: false },
    ],
  },

  {
    question: "19.Which unit is relative to the root element?",
    answers: [
      { text: "A. em", correct: false },
      { text: "B. px", correct: false },
      { text: "C. %", correct: false },
      { text: "D. rem", correct: true },
    ],
  },

  {
    question: "20.Which property is used for responsive design?",
    answers: [
      { text: "A. float", correct: false },
      { text: "B. media queries", correct: true },
      { text: "C. z-index", correct: false },
      { text: "D. overflow", correct: false },
    ],
  },

  {
    question: "21.Which keyword is used to declare a variable?",
    answers: [
      { text: "A. variable", correct: false },
      { text: "B. dim", correct: false },
      { text: "C. var", correct: true },
      { text: "D. int", correct: false },
    ],
  },

  {
    question: "22.Which data type is NOT primitive?",
    answers: [
      { text: "A. string", correct: false },
      { text: "B. Number", correct: false },
      { text: "C. Boolean", correct: false },
      { text: "D. Object", correct: true },
    ],
  },

  {
    question: "23.Which operator is used to compare value and type?",
    answers: [
      { text: "A. ==", correct: false },
      { text: "B. =", correct: false },
      { text: "C. ===", correct: true },
      { text: "D. !=", correct: false },
    ],
  },

  {
    question: "24.What will console.log(typeof []) return?",
    answers: [
      { text: "A. array", correct: false },
      { text: "B. object", correct: true },
      { text: "C. list", correct: false },
      { text: "D. undefined", correct: false },
    ],
  },

  {
    question: "25.Which function is used to print output in console?",
    answers: [
      { text: "A. print()", correct: false },
      { text: "B. log()", correct: false },
      { text: "C. console.log()", correct: true },
      { text: "D. write()", correct: false },
    ],
  },

  {
    question: "26.Which method selects multiple elements?",
    answers: [
      { text: "A. getElementById", correct: false },
      { text: "B. querySelector", correct: false },
      { text: "C. getElementsByClassName", correct: true },
      { text: "D. getElement", correct: false },
    ],
  },

  {
    question: "27.Which event occurs when a page loads?",
    answers: [
      { text: "A. onclick", correct: false },
      { text: "B. onload", correct: true },
      { text: "C. onhover", correct: false },
      { text: "D. onchange", correct: false },
    ],
  },

  {
    question: "28.What is DOM?",
    answers: [
      { text: "A. Data Object Model", correct: false },
      { text: "B. Document Object Model", correct: true },
      { text: "C. Digital Object Method", correct: false },
      { text: "D. Display Object Model", correct: false },
    ],
  },

  {
    question: "29. Which loop runs at least once?",
    answers: [
      { text: "A. for", correct: false },
      { text: "B. while", correct: false },
      { text: "C. do-while", correct: true },
      { text: "D. foreach", correct: false },
    ],
  },

  {
    question: "30.Which method converts object to JSON?",
    answers: [
      { text: "A. JSON.parse()", correct: false },
      { text: "B. JSON.stringify()", correct: true },
      { text: "C. JSON.convert()", correct: false },
      { text: "D. JSON.object()", correct: false },
    ],
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function showQuestion() {
  resetState();
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.addEventListener("click", () => selectAnswer(btn, answer.correct));
    answersEl.appendChild(btn);
  });
}

function resetState() {
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
}

function selectAnswer(button, correct) {
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    buttons.forEach((btn, index) => {
      if (questions[currentQuestion].answers[index].correct) {
        btn.classList.add("correct");
      }
    });
  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `You scored ${score} / ${questions.length}`;
}

showQuestion();