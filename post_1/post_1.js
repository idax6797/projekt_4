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

                // Husk at en radio knap gruppe skal dele det samme navn
                option.name = "quiz" + number;
                label.appendChild(option);

                // Tilføj option tekst
                let otext = document.createTextNode(questions[index]['o'][oindex]);
                label.appendChild(otext);
            }

            // Tilføj til sidst spørgsmålet til main HTML quiz wrapper
            wrapper.appendChild(qwrap);
        }

        // Tilføj submit knap + event handler til quiz wrapper
        let submitbutton = document.createElement("input");
        submitbutton.type = "submit";
        wrapper.appendChild(submitbutton);
        wrapper.addEventListener("submit", quiz.submit);
    },

    submit : function (evt) {
    // quiz.submit() : Håndterer beregninger, når brugeren svarer/submit'er til en quiz

        // Stop the form fra at submit
        evt.preventDefault();
        evt.stopPropagation();

        // Fordi vi gav alle svarmulighederne en class = "oquiz", så kan vi ...
        let selected = document.querySelectorAll(".oquiz:checked");

        // Få scoren
        let score = 0;
        for (let index in questions) {
            if (selected[index].value == questions[index]['a']) {
                score++;
            }
        }
        
        // Vi kan beregne scoren nu
        let total = selected.length;
        let percent = score / total;

        // Opdater og vis scoren
        // I stedet for at lave elementer, kan vi også ændre inner HTML direkte
        let html = "<h1>";
        if (percent>=1.0) {
            html += "KORREKT!"
        } else {
            html += "FORKERT!";
        }
        html += "</h1>";
        document.getElementById("quiz-wrap").innerHTML = html;
    }
};

window.addEventListener("load", quiz.draw);







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