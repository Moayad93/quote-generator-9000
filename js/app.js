const quotes = [{
  quoteText: "Genius is one percent inspiration and ninety-nine percent perspiration.",
  quoteAuthor: "Thomas Edison"
}, {
  quoteText: "You can observe a lot just by watching.",
  quoteAuthor: "Yogi Berra"
}, {
  quoteText: "A house divided against itself cannot stand.",
  quoteAuthor: "Abraham Lincoln"
}, {
  quoteText: "Difficulties increase the nearer we get to the goal.",
  quoteAuthor: "Johann Wolfgang von Goethe"
}, {
  quoteText: "Fate is in your hands and no one elses",
  quoteAuthor: "Byron Pulsifer"
}, {
  quoteText: "Be the chief but never the lord.",
  quoteAuthor: "Lao Tzu"
}, {
  quoteText: "Nothing happens unless first we dream.",
  quoteAuthor: "Carl Sandburg"
}, {
  quoteText: "Well begun is half done.",
  quoteAuthor: "Aristotle"
}, {
  quoteText: "Life is a learning experience, only if you learn.",
  quoteAuthor: "Yogi Berra"
}, {
  quoteText: "Self-complacency is fatal to progress.",
  quoteAuthor: "Margaret Sangster"
}, {
  quoteText: "Peace comes from within. Do not seek it without.",
  quoteAuthor: "Buddha"
}, {
  quoteText: "What you give is what you get.",
  quoteAuthor: "Byron Pulsifer"
}, {
  quoteText: "We can only learn to love by loving.",
  quoteAuthor: "Iris Murdoch"
}, {
  quoteText: "Life is change. Growth is optional. Choose wisely.",
  quoteAuthor: "Karen Clark"
}, {
  quoteText: "You'll see it when you believe it.",
  quoteAuthor: "Wayne Dyer"
}, {
  "quoteText": "Wisdom begins in wonder.",
  "quoteAuthor": "Socrates"
}, {
  quoteText: "Without courage, wisdom bears no fruit.",
  quoteAuthor: "Baltasar Gracian"
}, {
  quoteText: "Don't wait. The time will never be just right.",
  quoteAuthor: "Napoleon Hill"
}, {
  quoteText: "To lead people walk behind them.",
  quoteAuthor: "Lao Tzu"
}, {
  quoteText: "Having nothing, nothing can he lose.",
  quoteAuthor: "William Shakespeare"
}, {
  quoteText: "Trouble is only opportunity in work clothes.",
  quoteAuthor: "Henry J. Kaiser"
}, {
  quoteText: "A rolling stone gathers no moss.",
  quoteAuthor: "Publilius Syrus"
}, {
  quoteText: "Ideas are the beginning points of all fortunes.",
  quoteAuthor: "Napoleon Hill"
}, {
  quoteText: "Everything in life is luck.",
  quoteAuthor: "Donald Trump"
}, {
  quoteText: "Doing nothing is better than being busy doing nothing.",
  quoteAuthor: "Lao Tzu"
}, {
  quoteText: "Trust yourself. You know more than you think you do.",
  quoteAuthor: "Benjamin Spock"
}, {
  quoteText: "Study the past, if you would divine the future.",
  quoteAuthor: "Confucius"
}, {
  quoteText: "The best teacher is experience learned from failures.",
  quoteAuthor: "Byron Pulsifer"
}, {
  quoteText: "When performance exceeds ambition, the overlap is called success.",
  quoteAuthor: "Cullen Hightower"
}, {
  quoteText: "When deeds speak, words are nothing.",
  quoteAuthor: "African proverb"
}, {
  quoteText: "Real magic in relationships means an absence of judgement of others.",
  quoteAuthor: "Wayne Dyer"
}, {
  quoteText: "From error to error one discovers the entire truth.",
  quoteAuthor: "Sigmund Freud"
}, {
  quoteText: "Well done is better than well said.",
  quoteAuthor: "Benjamin Franklin"
}, {
  quoteText: "Bite off more than you can chew, then chew it.",
  quoteAuthor: "Ella Williams"
}, {
  quoteText: "Work out your own salvation. Do not depend on others.",
  quoteAuthor: "Buddha"
}, {
  quoteText: "One today is worth two tomorrows.",
  quoteAuthor: "Benjamin Franklin"
}];

const quotesSection = document.querySelector('#quotesSection');
const generateButton = document.querySelector('#generateButton');

const generateQuotes = () => {

  quotesSection.innerHTML = '';

  const quotesAmount = document.querySelector('input[name="quotesAmount"]:checked').value;

  for (let i = 0; i < quotesAmount; i++) {

    const randomNumber = Math.floor(Math.random() * quotes.length);

    console.log(quotesAmount);
    console.log(randomNumber);

    const blockquote = document.createElement('blockquote');
    const span       = document.createElement('span');

    const text   = quotes[randomNumber].quoteText;
    const author = quotes[randomNumber].quoteAuthor;

    blockquote.textContent = text;
    span.textContent       = author;

    blockquote.appendChild(span);
    quotesSection.appendChild(blockquote);

  }
}

generateButton.addEventListener('click', generateQuotes);