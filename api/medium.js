const apiKey = 'yourAPIkey';
function getWeatherData(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);
      console.log(`Weather in ${response.name}:`);
      console.log(`Temperature: ${response.main.temp}°C`);
      console.log(`Weather: ${response.weather[0].description}`);
      console.log(`Humidity: ${response.main.humidity}%`);
      console.log(`Wind Speed: ${response.wind.speed} m/s`);
    } else {
      console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
    }
  };
  xhr.onerror = function() {
    console.error("Request failed");
  };
  xhr.send();
}

getWeatherData('Bahawalpur');