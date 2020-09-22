const quizData = [
    {
        question: "Hvilken nationalitet havde de faldne soldater?",
        a: "Danske",
        b: "Tyske",
        c: "Engelske/amerikanske",
        correct: "c"
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");


let currentQuestion = 0; 
// "Keep track of the current q" Er denne nødvendig, hvis vi har kun et spørgsmål?

loadQuiz(); // Function bliver kaldt, hver man man trykker 'svar' (submit)

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

submitBtn.addEventListener("click",()=> {
    // Normalt kaldes den loadQuestion, men i vores tilfælde skal der vel loades KORREKT eller FORKERT screen her???

    // currentQuestion++; // Igen, er denne nødvendig, hvis vi har kun et spørgsmål?

    // if(currentQuestion < quizData.length) { // Som jeg forstå det, er længden på tre svar 0, 1, 2 ...
    //     loadResult();
    // } else {
    //     alert("KORREKT!!!");
    // }

    if (currentQuestion < 3) { // DETTE ER IKKE RIGTIGT, for det er ikke nummeret på svarmuligheder - det er antal gange, vi klikker eller sådan noget. Find løsningen.
        alert("Forkert!")
    } else {
        alert("Korrekt!")
    }
});