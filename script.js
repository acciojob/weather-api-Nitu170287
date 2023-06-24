//your JS code here. If required.
const apiKey = 'https://openweathermap.org/api'

function fetchWeatherData() {
  const url = 'https://api.weatherapi.com/v1/current.json';
  const headers = {
    'Content-Type': 'application/json',
    'key': apiKey
  };

  fetch(url, {
    method: 'GET',
    headers: headers
  })
  .then(response => response.json())
  .then(data => {
    // Extract the relevant weather information from the response
    const location = data.location.name;
    const temperature = data.current.temp_c;
    const description = data.current.condition.text;

    // Display the weather information
    console.log(`Location: ${location}`);
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Description: ${description}`);
  })
  .catch(error => {
    console.log('Error fetching weather data:', error);
  });
}

fetchWeatherData();
 







