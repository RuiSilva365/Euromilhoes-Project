const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../frontend')));

// Helper function to generate random unique numbers
function generateRandomNumbers(count, max) {
    const numbers = new Set(); // Use a Set to avoid duplicates
    while (numbers.size < count) {
        const randomNum = Math.floor(Math.random() * max) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b); // Convert Set to sorted array
}

// Endpoint for generating Euromilhões numbers
app.get('/euro', (req, res) => {
    const numeros = generateRandomNumbers(5, 50);  // 5 random numbers between 1 and 50
    const estrelas = generateRandomNumbers(2, 12); // 2 random numbers between 1 and 12
    res.set('content-type', 'application/json');
    res.json({
        numeros,
        estrelas
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
