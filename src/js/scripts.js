// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const affirmations = [
    "I am at peace with all that has happened, is happening, and will happen.",
    "I trust the journey of life and know that I am exactly where I need to be.",
    "I radiate positivity and attract good energy into my life.",
    "I am capable of overcoming any challenge that comes my way.",
    "I am grateful for all the abundance in my life.",
    "I am surrounded by love, light, and peace.",
    "I am worthy of love, happiness, and success.",
    "I am enough just as I am.",
    "I choose to let go of fear and embrace love."
];

function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmationElement = document.getElementById("affirmation");
    affirmationElement.textContent = affirmations[randomIndex];
}

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Everything you can imagine is real. - Pablo Picasso",
    "Don't count the days, make the days count. - Muhammad Ali",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}
