// API key. Replace with your API key
const APIKEY = 'e52e8dc1216076bcc6e86e9b55715784';
// City
const city = 'Cheney';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // Template to output
  const template = `
    <h1>Weather</h1>
    <data value="${data.name}" class="city">${data.name}</data>
    <br>
    <data value="${data.main.temp}" class="temp">${data.main.temp} &#8457;</data>
    <br>
    <data value="${data.wind.speed}" class="wind">${data.wind.speed} mph</data>
    <br>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});
