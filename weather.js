"use strict"

// api.openweathermap.org / data / 2.5 / weather ? q = { city name } & appid={ your api key }
let city = prompt("Enter City ")
const url = "http://api.openweathermap.org/data/2.5/weather?appid=20642b561dd890fd5884bff2116b23ec&q=" + city;

$.ajax({
    url: url,
    success: function (result) {
        console.log(result);

        console.log(result.name);

        $("#location").text(result.name);

        $("#sky").text(result.weather[0].description);

        let f = result.main.temp * (9 / 5) - 459.67;
        f = Math.round(f);
        let fahreneit = f.toString();

        $("#temp").text(fahreneit);

        let mph = Math.round(result.wind.speed / .44704).toString();

        $("#wind").text(mph);

    }
})
