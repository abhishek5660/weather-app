document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    if (city === '') {
      alert('Please enter a city name');
      return;
    }
  
    const apiKey = '23bb392a848d4f20880db5e8b5ca1ec0'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          alert('City not found. Please try again.');
          return;
        }
        const weatherResult = document.getElementById('weather-result');
        weatherResult.style.display = 'block';
        weatherResult.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        alert('Error fetching weather data.');
        console.error(error);
      });
  });
  