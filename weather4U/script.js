const API_KEY = 'a8850105f0c2db1e67720f653c8886ff'; // Replace with your API key

// Event listener for button click
document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    
    console.log("City entered:", city); // Log the city entered by the user
    
    // Check if city input is not empty
    if (city) {
        // Fetch weather data from OpenWeatherMap API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => {
                console.log("API response received:", response); // Log the raw response object
                
                if (!response.ok) throw new Error('City not found');
                return response.json();
            })
            .then(data => {
                console.log("Parsed data from API:", data); // Log the parsed JSON data
                
                // Display weather data
                document.getElementById('weatherInfo').style.display = 'block';
                document.getElementById('cityName').textContent = `City: ${data.name}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            })
            .catch(err => {
                console.log("Error occurred:", err.message); // Log the error message
                alert('Error: ' + err.message);
                document.getElementById('weatherInfo').style.display = 'none';
            });
    } else {
        alert('Please enter a city name!');
    }
});





















