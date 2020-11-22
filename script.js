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

function showResults(){
    
}

// variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
    {
        question: "Click the button below when you're ready to begin."
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
      question: "Hello?",
      answers: {
        a: "Hi",
        b: "Hey",
        c: "Wazzapppp"
      },
      correctAnswer: "c"
    },
        {
      question: "Hi?",
      answers: {
        a: "Hi",
        b: "Hey",
        c: "Wazzapppp"
      },
      correctAnswer: "c"
    },
            {
      question: "Hey?",
      answers: {
        a: "Hi",
        b: "Hey",
        c: "Wazzapppp"
      },
      correctAnswer: "c"
    },

];

buildQuiz();

var startButton = document.getElementById("start");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

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

submitButton.addEventListener('click', showResults);
nextButton.addEventListener("click", showNextSlide);
startButton.addEventListener("click", showNextSlide);