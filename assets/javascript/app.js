var card = $("#quiz-area");


var questions = [
  {
    question: "Who is considered one of the best bikers of all time?",
    answers: ["Lance Armstrong", "Adelle", "Blair Perkes", "Chris Stead"],
    correctAnswer: "Blair Perkes"
  },
  {
    question: "Who is the strongest man out of these options?",
    answers: ["Blair Perkes", "Aneta Florczyk", "Jill Mills", "Donna Moore"],
    correctAnswer: "Blair Perkes"
  },
  {
    question: "Which university won the NCAA championship in 1966?",
    answers: ["Texas Western", "Kentucky", "Duke", "Utah State"],
    correctAnswer: "Texas Western"
  },
  {
    question: "Who is the fastest cross country mountain biker in the world?",
    answers: ["Anton Cooper", "Maxime Marotte", "Lars Forster", "Nino Schurter"],
    correctAnswer: "Nino Schurter"
  },
  {
    question: "What is Blair's favorite thing to do?",
    answers: ["ski", "bike", "boat", "hunt"],
    correctAnswer: "bike"
  },
  {
    question:"Who is the world's greatest dad?",
    answers: ["Shane", "Doral", "Brett", "Chuck"],
    correctAnswer: "Brett"
  },
  {
    question: "What was Doug's best friend's name?",
    answers: ["Skeeter", "Mark", "Zach", "Cody"],
    correctAnswer: "Skeeter"
  },
];

// Variable setInterval stuff
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// Things that happen on click

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
