function beginQuiz(){
  // Store the HTML output
  const output = [];

  questionSet.forEach(
    (currentQuestion, questionNumber) => {

      // List of possible answers
      const answers = [];

      // For each answer
      for(letter in currentQuestion.answers){

        // Add a radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
      );
    }
  );

  // finally combine output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  questionSet.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
        swal("", "<div style='font-size :24px;'> correct answer </div>", "success");
        numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
     
    }
    // If answer is wrong or blank
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${questionSet.length}`;
}

/*
function showPage(n) {
  pages[currentPage].classList.remove('active-page');
  pages[n].classList.add('active-page');
  currentPage = n;
  if(currentPage === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentPage === pages.length-1){
    nextButton.style.display = 'none';
    resultsButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    resultsButton.style.display = 'none';
  }
}



function showNextPage() {
  showPage(currentPage + 1);
}

function showPreviousPage() {
  showPage(currentPage - 1);
}

*/

const quizContainer = document.getElementById('quiz');
/*
const resultsContainer = document.getElementById('results');
const resultsButton = document.getElementById('b_results'); */

// src of questions - https://www.cellsalive.com/quiz1.htm
const questionSet = [
  {
    question: "Name the membrane valves that open and close for potassium efflux and sodium influx.",
    answers: {
      a: "Ion channels",
      b: "Vacuoles",
      c: "Capillaries",
    },
    correctAnswer: "a",
    explanation: "Ion channels open and close for potassium efflux and sodium influx."
  },
  {
    question: "What is another name for programmed cell death?",
    answers: {
      a: "Necrosis",
      b: "Oxidative burst",
      c: "Apoptosis"
    },
    correctAnswer: "c",
    explanation: "Apoptosis is another name for programmed cell death."
  },
  {
    question: "When a sodium channel opens and sodium rushes into a myocyte (heart cell), the cell membrane becomes...",
    answers: {
      a: "Polarized",
      b: "Depolarized",
      c: "Paralyzed"
    },
    correctAnswer: "b",
    explanation: "When a sodium channel opens and sodium rushes into a myocyte (heart cell), the cell membrane becomes depolarized."
  }
];

/*
// Start quiz
beginQuiz();

// Below part is for converting into different pages

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const pages = document.querySelectorAll(".slide");
let currentPage = 0;

// Show the opening page
showPage(currentPage);

// Added Event listeners
resultsButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousPage);
nextButton.addEventListener("click", showNextPage);

*/

function displayQuestion(index) {
  const output = [];
  const answers = [];
  var currentQuestion = questionSet[index];

  // Add radio button for each answer choice
  for (choice in currentQuestion.answers){
    answers.push(
      `<label>
        <input type="radio" name="question${index}" value="${choice}">
        ${choice} :
        ${currentQuestion.answers[letter]}
      </label>`
    );
  }
  output.push(
    `<div class="slide">
       <div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>
    </div>`
  );
  
  // Combine output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output;//.join('');
}

// Play
function play() {
   score = 0;
   question = 0;
   maxScore = 3;
   minScore = -3;
   while (score > minScore && score < maxScore) { // generate a new question unless the game is over
      displayQuestion(question);
      question += 1;
      question %= questionSet;
   }
   if (score >= maxScore) { // player has won
      ;
   } else { // player has lost
      ;
   }
   
};

window.onload = function() {
  window.count = 0;
  play();
}
