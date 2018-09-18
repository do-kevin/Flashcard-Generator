console.log(`\nClozeCard loaded.\n`);

module.exports = function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    
    if (text.search(cloze) === 0) {
        // console.log(text.replace(cloze, `\n. . . `));
        // this.partial is coming up as undefined whenever it is placed inside the conditional
       this.partial = text.replace(cloze, `\n. . . `);
    } else if (text.search(cloze) === -1 || text.search(cloze) === undefined)  {
        console.log(`"${cloze}" does not appear in "${text}"`);
    }

}