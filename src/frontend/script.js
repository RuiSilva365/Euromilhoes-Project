document.getElementById('genBtn').addEventListener('click', async () => {
    try {
        // Fetch the generated numbers from the backend (updated to '/euro')
        const response = await fetch('/euro');
        const data = await response.json();
        
        // Display the main numbers
        const olMain = document.getElementById('olMain');
        olMain.innerHTML = '';
        data.numeros.forEach(number => { // Updated to 'numeros'
            const li = document.createElement('li');
            li.textContent = number;
            olMain.appendChild(li);
        });

        // Display the star numbers
        const olStars = document.getElementById('olStars');
        olStars.innerHTML = '';
        data.estrelas.forEach(star => { // Updated to 'estrelas'
            const li = document.createElement('li');
            li.textContent = star;
            olStars.appendChild(li);
        });

        // Show a good luck message
        document.getElementById('goodLuckMessage').style.display = 'block';
    } catch (error) {
        console.error('Error generating numbers:', error);
    }
});
