"use strict"

const question = [
    {
        question:"Who created the atomic bomb ",
        answers:[
             {text:"Albert Einstein",correct:false},
             {text:"Georg Simon Ohm ",correct:false},
             {text:" J. Robert Oppenheimer",correct:true},
             {text:"Alexander Graham Bell",correct:false},
             
        ]
    },
    {
        question:"Who said: May the flood come after me",
        answers:[
             {text:"Nikol Pashinyan",correct:false},
             {text:"Louis XV",correct:true},
             {text:"Napaleon Bonaparte",correct:false},
             {text:"Daenerys Targaryen",correct:false},
             
        ]
    },
    {
        question:"Who is Nikolo Tesla",
        answers:[
             {text:"Grandfather of Elon Musk",correct:false},
             {text:"Taxi driver",correct:false},
             {text:"Doctor",correct:false},
             {text:"Scientist",correct:true},
             
        ]
    },
    {
        question:"How high is Mount Ararat",
        answers:[
             {text:"5165",correct:true},
             {text:"4090",correct:false},
             {text:"3265",correct:false},
             {text:"6324",correct:false},
             
        ]
    },

];

const questionEL = document.querySelector(".question");
const answerBtns = document.querySelector(".answer-btns");
const next = document.querySelector(".next-btn");

let CQI = 0;
let score = 0;

function startQuiz(){
    CQI = 0 // ամեն անգամ երբ սկսումա րեսեթա անում CQI ֊ը 0 ի
    score = 0;     //նույն ձև score ը 
    next.innerHTML = "Next";
    showQuestion();


};


function showQuestion(){
    reset()
    let currentQuestion = question[CQI];
    let questionNumber = CQI + 1;
    questionEL.innerHTML = questionNumber + ". " + currentQuestion.question

    currentQuestion.answers.forEach(item=>{
        const button = document.createElement("button");
        button.innerHTML = item.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(item.correct){
            button.dataset.correct = item.correct;
        }
        button.addEventListener("click",selectAnswer)
    })

};

function reset(){
    next.style.display = "none";
    while(answerBtns.firstChild){
    answerBtns.removeChild(answerBtns.firstChild)

    }
}

function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct")
     }else{
        selectedBtn.classList.add("incorrect")
     }

     Array.from(answerBtns.children).forEach(item =>{
        if(item.dataset.correct === "true"){
            item.classList.add("correct")
        }
        item.disabled = "true"
     })
     next.style.display = "block"

}

function showScore(){
    reset();
    questionEL.innerHTML = `Your score ${score} out of ${question.length} `;
    next.innerHTML = "Play again";
    next.style.display = "block"

}

function handleNextButton(){
    CQI++;
    if(CQI < question.length){
        showQuestion()
    }else{
        showScore()
    }
}

next.addEventListener("click",()=>{
    if(CQI < question.length){
        handleNextButton()
    
    }else{
        startQuiz()
    }
})

startQuiz()