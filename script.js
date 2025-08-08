const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success.", author: "Unknown" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

let quoteCount = 0;

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteElement.textContent = quote.text;
    authorElement.textContent = `- ${quote.author}`;
    
    // Update counter
    quoteCount++;
    updateCounter();
}

function updateCounter() {
    // We'll add the counter element in the next commit
    console.log(`Quotes viewed: ${quoteCount}`);
}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteElement.textContent = quote.text;
    authorElement.textContent = `- ${quote.author}`;
}

newQuoteBtn.addEventListener('click', getRandomQuote);