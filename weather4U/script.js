const options = {
    method: 'GET',
    headers: {
        'x-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87', // your API KEY here
        'x-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    document.getElementById('cityName').innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById('temp').innerHTML = response.temp;
            document.getElementById('temp2').innerHTML = response.temp;
            document.getElementById('feels_like').innerHTML = response.feels_like;
            document.getElementById('humidity').innerHTML = response.humidity;
            document.getElementById('humidity2').innerHTML = response.humidity;
            document.getElementById('min_temp').innerHTML = response.min_temp;
            document.getElementById('max_temp').innerHTML = response.max_temp;
            document.getElementById('wind_speed').innerHTML = response.wind_speed;
            document.getElementById('wind_speed2').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
            document.getElementById('sunrise').innerHTML = response.sunrise;
            document.getElementById('sunset').innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(document.getElementById('city').value);
});

// Fetch the weather for an initial city
getWeather('Delhi');
