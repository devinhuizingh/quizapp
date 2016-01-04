$(document).ready(function() {

var questions = [
		{
        question: "Complete the verse: 'Be not overcome by evil, but overcome evil with…'",
        choices: ["Love", "Good", "Kindness", "Forgiveness"],
        qNum : 0,
        correct : 1,
        },
        {
        question: "What happened to Barjesus (Elymas) when he opposed Paul and Barnabas?",
        choices: ["he became blind", "he was unable to speak", "they cast the demon out of him", "he fell over dead"],
        qNum : 1,
        correct : 0,
        },
        {
        question: "How was the wood Solomon needed to build the temple and his palace transported to Jerusalem?",
        choices: ["by rafts on the sea and then carried on land", "on the backs of slaves", "using oxen and men", "it was floated down the river Jericho"],
        qNum : 2,
        correct : 0,
        },
        {
        question: "Who wrote the book of James?",
        choices: ["Paul", "Peter", "John", "James"],
        qNum : 3,
        correct : 3,
        }
        ];

currentQuestion = 0;
selectedAnswer = 1;
correctAnswer = 1;
answeredRight = 0;

$(".answers").submit(function(e){
        e.preventDefault();
       
        //set variables
        correctAnswer = questions[currentQuestion].correct;

        selectedAnswer = $('input[name=answer]:checked').val();
        
        if (selectedAnswer == correctAnswer) {
                $(".right-or-wrong").html("That is Correct!")
                        }
        else if(selectedAnswer != correctAnswer) {
                $(".right-or-wrong").html("Incorrect")

        };
        if (selectedAnswer == correctAnswer) {
                answeredRight++
        };
        
        
        if (currentQuestion < questions.length-1) {
                currentQuestion++;

                //get question
                $(".question").html(questions[currentQuestion].question);
                //get answers
                for (var i = 0; i <= questions[currentQuestion].choices.length; i++) {
                        var index="choice" + i;
                        $('#'+index).html(questions[currentQuestion].choices[i]);
                }
                $('input[name=answer]').attr('checked',false);

        }
        else if (currentQuestion >= questions.length-1) {
                $(".right-or-wrong").html("You finished! " + "You got " + answeredRight + " out of " + questions.length + " correct!")
                $(".reset").show()
        };
});

$("button").click(function() {
        console.log("reset is working");
        document.location.reload(true);

})




});