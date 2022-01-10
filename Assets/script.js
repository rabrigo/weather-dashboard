var cityDate = document.querySelector('.city-date');
var tempDisplay = document.querySelector('.temp-display');
var windDisplay = document.querySelector('.wind-display');
var humidityDisplay = document.querySelector('.humidity-display');
var uvIndexDisplay = document.querySelector('.uv-index-display');
var request = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=28f599eb217e2b8510f6add9afd17c7b&units=imperial";

fetch(request)
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
                // console.log(data.weather[0].main);
                cityDate.textContent = `${data.name} (${moment().format('MM/DD/YYYY')}): ${data.main.temp}\u00B0F`;
                tempDisplay.textContent = `${data.main.temp}\u00B0F`;
                windDisplay.textContent = `${data.wind.speed} MPH`;
                humidityDisplay.textContent = `${data.main.humidity}`;
                uvIndexDisplay.textContent = `${data.main.humidity}`;
              });
            

              