var searchInput = document.querySelector('#search-input');
var searchButton = document.querySelector('.search-button');
var cityDisplay = document.querySelector('.city-display');
var tempDisplay = document.querySelector('.temp-display');
var windDisplay = document.querySelector('.wind-display');
var humidityDisplay = document.querySelector('.humidity-display');
var uvIndexDisplay = document.querySelector('.uv-index-display');
var cityToSearch;
var apiURL;
var searchHistoryDisplay = document.querySelector('#search-history');

function searchWeather () {
        cityToSearch = searchInput.value;
        // console.log(cityToSearch);
        apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=28f599eb217e2b8510f6add9afd17c7b&units=imperial`;
        fetch(apiURL)
                .then(function (response) {
                        return response.json();
                })
                .then(function (data) {
                        console.log(data);
                        // console.log(data.weather[0].main);
                        cityDisplay.textContent = `${data.name} (${moment().format('MM/DD/YYYY')}): ${data.main.temp}\u00B0F`;
                        tempDisplay.textContent = `${data.main.temp}\u00B0F`;
                        windDisplay.textContent = `${data.wind.speed} MPH`;
                        humidityDisplay.textContent = `${data.main.humidity}`;
                        uvIndexDisplay.textContent = `${data.main.humidity}`;
                });
        localStorage.setItem("searched", cityToSearch);
        updateHistory();
        }

function updateHistory() {
        var recentSearch = document.createElement('h5');
        recentSearch.textContent = localStorage.getItem("searched");
        searchHistoryDisplay.appendChild(recentSearch);
}

// console.log(searchButton);
searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        searchWeather();
});



              