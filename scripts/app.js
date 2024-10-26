import getQuotes from "quotes-factory";

const statement = getQuotes().statement;
const author = getQuotes().author;
const quote = `quote: ${statement} \n author: ${author}`;
console.log(quote);
