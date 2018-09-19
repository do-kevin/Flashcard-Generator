const BasicCard = require(`./BasicCard.js`);
const ClozeCard = require(`./ClozeCard.js`);
const inquirer = require(`inquirer`);

var basicArr = [
  new BasicCard(
    "Who was the first president of the United States?",
    "George Washington"
  ),
  new BasicCard(
    "Who was the first president to live in the White House",
    "John Adams"
  ),
  new BasicCard(
    "Who wrote the Declaration of Independence",
    "Benjamin Franklin"
  ),
  new BasicCard("Who made the American flag?", "Betty Ross"),
  new BasicCard("Who was the third president?", "Thomas Jefferson")
];

var clozeArr = [
  new ClozeCard(
    'Thomas Hobbes described life as "solitary, poor, nasty, brutish, and short"?',
    "Thomas Hobbes"
  ),
  new ClozeCard(
    'Karl Marx wrote "Das Kapital" and "The Communist Manifesto"?',
    "Karl Marx"
  ),
  new ClozeCard('John Stuary Mill wrote the "On Liberty"', "John Stuary Mill"),
  new ClozeCard(
    "Thomas Robert Malthus believed that human populations evitably outstrip food supplies?",
    "Thomas Robert Malthus"
  ),
  new ClozeCard(
    "Pythagoras is known for his triangle-related theorem, which garnered follows?",
    "Pythagoras"
  )
];

var i = 0;
var correctAnswers = 0;

inquirer
  .prompt([
    {
      type: `list`,
      name: `game`,
      message: `Which game would you like to play?\n\n`,
      choices: [`Basic Card Game`, `Cloze Card Game`]
    }
  ])
  .then(mode => {
    if (mode.game === `Basic Card Game`) {
      console.log(`Basic game initiated...\n`)
      playBasic();
    } else if (mode.game === `Cloze Card Game`) {
      console.log(`Cloze game initiated...\n`)
      playCloze();
    }
  });

function playBasic() {
  inquirer
    .prompt([
      {
        type: `list`,
        name: `question`,
        message: `${basicArr[i].front}\n`,
        choices: [
          basicArr[4].back,
          basicArr[1].back,
          basicArr[3].back,
          basicArr[2].back,
          basicArr[0].back
        ]
      }
    ])
    .then(guess => {
      if (guess.question === basicArr[i].back) {
        console.log(`Correct answer`);
        correctAnswers++;
      } else {
        console.log(
          `Incorrect answer.\n The correct answer is ${basicArr[i].back}\n`
        );
      }

      i++;

      if (i < basicArr.length) {
        playBasic();
      } else if (i === basicArr.length) {
        console.log(`Game over. You have correct ${correctAnswers} answers.\n`);
        correctAnswers = 0;
        return;
      }
    });
}

function playCloze() {
  inquirer
    .prompt([
      {
        type: `list`,
        name: `question`,
        message: `${clozeArr[i].partial}\n`,
        choices: [
          clozeArr[0].cloze,
          clozeArr[3].cloze,
          clozeArr[2].cloze,
          clozeArr[1].cloze,
          clozeArr[4].cloze
        ]
      }
    ])
    .then(guess => {
      if (guess.question === clozeArr[i].cloze) {
        console.log(`Correct answer`);
        correctAnswers++;
      } else {
        console.log(
          `Incorrect answer.\n ${clozeArr[i].fullText} \n`
        );
      }

      i++;

      if (i < clozeArr.length) {
        playCloze();
      } else if (i === clozeArr.length) {
        console.log(`Game over. You have correct ${correctAnswers} answers.\n`);
        correctAnswers = 0;
        return;
      }
    });
}
