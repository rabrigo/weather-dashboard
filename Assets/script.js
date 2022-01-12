var searchHistory = [''];
var searchInput = document.getElementById('search-input');
var searchButton = document.querySelector('.search-button');
var cityDisplay = document.querySelector('.city-display');
var tempDisplay = document.querySelector('.temp-display');
var windDisplay = document.querySelector('.wind-display');
var humidityDisplay = document.querySelector('.humidity-display');
var cityToSearch;
var apiURL;
var searchHistoryDisplay = document.querySelector('#search-history-display');

function renderHistory() {
    var searchArray = JSON.parse(localStorage.getItem("searchHistory"));
    if (!searchArray) {
        return;
    } else {
        for (var i = 0; i < searchArray.length; i++) {
                var searchItem = document.createElement('h6');
                searchItem.innerText = searchArray[i];
                console.log(searchItem);
                console.log(searchArray[i]);
                searchHistoryDisplay.appendChild(searchItem);
        }   
        console.log(searchArray)}
        }

function searchWeather () {
        cityToSearch = searchInput.value;
        var apiKEY = "28f599eb217e2b8510f6add9afd17c7b";
        apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${apiKEY}&units=imperial`;
        fetch(apiURL)
                .then(function (response) {
                        return response.json();
                })
                .then(function (data) {
                        console.log(data);
                        cityDisplay.textContent = `${data.name} (${moment().format('MM/DD/YYYY')}): ${data.weather[0].main}`;
                        tempDisplay.textContent = `Temperature: ${data.main.temp}\u00B0F`;
                        windDisplay.textContent = `Wind: ${data.wind.speed} MPH`;
                        humidityDisplay.textContent = `Humidity: ${data.main.humidity}`;
                });
        updateHistory();
        }

function updateHistory() {
        var recentSearch = document.createElement('h6');
        recentSearch.textContent = cityToSearch;
        searchHistory.push(cityToSearch);
        searchHistoryDisplay.appendChild(recentSearch);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

renderHistory();
searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        searchWeather();
});



              