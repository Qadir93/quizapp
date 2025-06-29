var questions = [
    {
        question: "HTML Stands For _________",
        options: [
            "Anchor Text Language",
            "HTML",
            "Case Cading Style Sheet",
            "HyperText markup language",
        ],
        correctAns: "HyperText markup language",
    },
    {
        question: "CSS Stands For _________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "JS Stands For _________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "DOM Stands For _________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "RAM Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "ROM Stands For _________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
]

var currentQuestion = document.getElementById('currentQuestion')
var totalQuestion = document.getElementById('totalQuestion')
var displayQuestion = document.getElementById('displayQuestion')
var options_div = document.getElementById('options_div')
var currentIndex = 0
var marks = 0

function QuizRender() {
    currentQuestion.innerHTML = currentIndex + 1
    totalQuestion.innerHTML = questions.length
    displayQuestion.innerHTML = questions[currentIndex].question
    // console.log(questions[currentIndex].options.length);

    for (var i = 0; i < questions[currentIndex].options.length; i++) {
        options_div.innerHTML += `
        <button 
        onclick="checkAnswer('${questions[currentIndex].options[i]}',
        '${questions[currentIndex].correctAns}')">
        
        ${questions[currentIndex].options[i]}

        </button>
        `
    }
}
QuizRender()

function Next() {
    if(currentIndex +1 == questions.length){
        alert(marks)
    }else{
        currentIndex++
        options_div.innerHTML = ""
        QuizRender()
    }
}
function checkAnswer(yourAnswer, correctAns) {
    if (yourAnswer == correctAns) {
        marks++
        console.log(marks);
    }
    Next()

}