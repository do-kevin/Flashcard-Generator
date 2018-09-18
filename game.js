const BasicCard = require(`./BasicCard.js`);
const ClozeCard = require(`./ClozeCard.js`);
// const inquirer = require(`inquirer`);

var command = process.argv[2];

switch (command) {
  case `a`:
    var firstPresident = new BasicCard(
      "Who was the first president of the United States?",
      "George Washington"
    );
    console.log(firstPresident.front);
    console.log(firstPresident.back);
    break;

  case `b`:
    var firstPresidentCloze = new ClozeCard(
      "George Washington was the first president of the United States.",
      "George Washington"
    );
    console.log(firstPresidentCloze.cloze);
    console.log(firstPresidentCloze.partial);
    console.log(firstPresidentCloze.fullText);
    break;

  case `c`:
    var brokenCloze = new ClozeCard("I like pizza", "tacos");
    console.log(brokenCloze.cloze);
    console.log(brokenCloze.partial);
    console.log(brokenCloze.fullText);
    break;
}
