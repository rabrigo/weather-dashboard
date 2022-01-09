var testOne = document.createElement('h1');
testOne.textContent = "Hello";
console.log(testOne);
document.body.appendChild(testOne);
var request = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=28f599eb217e2b8510f6add9afd17c7b";

fetch(request)
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
                testOne.textContent = data.timezone;
              });
            

              