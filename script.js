function buildQuiz(){
    var output = [];
  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        var answers = [];
  
        for(letter in currentQuestion.answers){
  
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
    quizContainer.innerHTML = output.join('');
}

// variables
var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var myQuestions = [
    {
        question: "Click the button below when you're ready to begin. Good luck!"
    },
    {
      question: "What is Javascript?",
      answers: {
        a: "A function",
        b: "A coffee shop",
        c: "A coding language"
      },
      correctAnswer: "c"
    },
    {
      question: "What does CSS stand for?",
      answers: {
        a: "Cheetos Smell Scrumptious",
        b: "Cascading Soda Stream",
        c: "Cascading Style Sheets"
      },
      correctAnswer: "c"
    },
    {
      question: "Which characters are used to contain an array?",
      answers: {
        a: ":)",
        b: ":(",
        c: "[]"
      },
      correctAnswer: "c"
    },
        {
      question: "What year was Javascript created?",
      answers: {
        a: "10",
        b: "5991",
        c: "1995"
      },
      correctAnswer: "c"
    },
            {
      question: "How do you spell Javascript backwards?",
      answers: {
        a: "not this one",
        b: "tjparvscr",
        c: "tpircsavaj"
      },
      correctAnswer: "c"
    }
];

buildQuiz();

var startButton = document.getElementById("start");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
var time =60;
var timerScore = document.querySelector("#timer-score");

showSlide(currentSlide);

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    if(currentSlide === slides.length-1){
        startButton.style.display = 'none';
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }

    else if(currentSlide === 0){
        startButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        submitButton.style.display = 'none';
    }
    else{
        startButton.style.display = 'none';
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

var ScoreTracker = function () {
    var timeInterval = setInterval(function() {
        if (time > 0 ) {
            timer.textContent = "Time Left: " + time;
            time--;
        }
        else{
            endGame();
        }
    }, 1000);
};

var startTimer = function () {
    ScoreTracker();
};

function endGame() {
    var recordName = (prompt("Timed Out! Please refresh and try again."));
    localStorage.setItem(recordName, resultsContainer)
}

nextButton.addEventListener("click", showNextSlide);
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", showNextSlide);