const startButtom = document.getElementBtId('sart-btn')
const questionContainerElement = document.getItemById('questiom-container')
const questionContainerElement = document.getItemById('question')
const answerButtonsElement = document.getElementById
const shuffledQuestions, currentQuesstions

startButtom.addEventListener('click', startGame)

function startGame () {
    console.log('started')
    startButtom.classList.add('hide')
    shuffledQuestions = questions.questions.sort(()=> Math.random()-, .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

Function show
function showQuestion(question) {
  questionContainerElement.innerText = question.question
  questions.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('bth')
      if (answer.correct0 {
          button.dataset.correct = answer.correct
      })
  })
}
function selectAnswer() {

}

const question = [
    {
        question: 'What is an array',
        answers: [
            {text: 'Collection of variables', correct: true},
            {text: 'Quick expression'}
            {text: ' Nouns of programming'}
            {text: 'Alert'}
        ]
    
    }
