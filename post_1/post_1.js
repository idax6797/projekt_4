let questions = [
    {
        // q = spørgsmål, o = svarmuligheder, a = svar
        q: "Hvilken nationalitet havde de faldne soldater?"
        o: [
            "Tyske",
            "Danske",
            "Engelske/amerikanske"
        ],
        a: 2 //Arrays starter med 0, derfor er svaret 2
    }
];

let quiz = {
    draw: function () {
        // Fetch HTML quiz wrapper
        let wrapper = document.getElementById("quiz-wrap");

        // HTML elementer
        for (let index in questions) {
            let number = parseInt(index)+1; // Det nuværende spørgsmålsnummer
            let qwrap = document.createElement("div"); // En div wrapper med dette spørgsmål og svarmuligheder
            qwrap.classList.add("question"); // CSS class

            // Spørgsmålet - <h1> header
            let question = document.createElement("h1");
            question.innerHTML = number + ") " + questions[index]['q'];
            qwrap.appendChild(question);

            // Svarmulighederne - <input> radio buttons og <label>
            for (let oindex in questions[index]['o']) {
                // <label> tag
                let label = document.createElement("label");
                qwrap.appendChild(label);

                // <option> tag
                let option = document.createElement("input");
                option.type = "radio";
                option.value = oindex;
                option.required = true;
                option.classList.add("oquiz");

                // 
            }

        }
    }
}







// const quizContainer = document.getElementById('quiz');
// const submitButton = document.getElementById('submit');
// const resultsContainer = document.getElementById('results');

// function buildQuiz(){
//     // Variabel som indeholder HTML-outputtet
// const output = [

// ];
// }

// function showResults(){

// }

// // Vis quizzen med det samme
// buildQuiz()

// // Ved tryk på svar, vis resultatet
// submitButton.addEventListener('click', showResults);

// const myQuestions = [
//     {
//         question: "Hvilken nationalitet havde de faldne soldater?",
//         answers: {
//           a: "Tyske",
//           b: "Danske",
//           c: "Engelske/amerikanske"
//         },
//         correctAnswer: "c"
//       }
// ];