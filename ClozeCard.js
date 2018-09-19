console.log(`\nClozeCard loaded.\n`);

module.exports = function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    
    if (text.search(cloze) === 0) {
       this.partial = text.replace(cloze, `\n. . . `);
    } else if (text.search(cloze) === -1 || text.search(cloze) === undefined)  {
        console.log(`"${cloze}" does not appear in "${text}"`);
    }
    

}
