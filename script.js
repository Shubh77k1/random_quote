// Define an array of quotes
const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
  "Whoever is happy will make others happy too. - Anne Frank"
];

// Function to generate a random quote
function generateQuote() {
  // Get a random index
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Get the quote at that index
  const randomQuote = quotes[randomIndex];
  // Display the quote
  document.getElementById('quote').innerText = randomQuote;
}

// Generate a quote when the page loads
generateQuote();

// Add event listener to the button
document.getElementById('generate-btn').addEventListener('click', generateQuote);
