// Define the array of affirmations
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

// Define the function to generate affirmations
function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmationElement = document.getElementById("affirmation");
    affirmationElement.textContent = affirmations[randomIndex];
}

// Define the array of quotes
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

// Define the function to generate quotes
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

// Define the function to play meditation
function playMeditation() {
    const location = document.querySelector('input[name="location"]:checked').value;

    // Hide all videos
    const videos = document.querySelectorAll('.video-container');
    videos.forEach(video => {
        video.style.display = 'none';
    });

    // Show the selected video
    const videoElement = document.getElementById(`meditationVideo${location}`);
    videoElement.parentElement.style.display = 'block';

    // Mute the video if it's the waterfall video
    if (location === 'waterfall') {
        videoElement.muted = true;
    } else {
        videoElement.muted = false;
    }

    // Play the selected video
    videoElement.play();
}

// Add event listener to the button after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateAffirmationButton").addEventListener("click", generateAffirmation);
    document.getElementById("playMeditationButton").addEventListener("click", playMeditation);
});





