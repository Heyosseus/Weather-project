let weather ={
    "apiKey" : "606e270265f94f12bea91623222403",
    fetchWeather: function(city){
       fetch (
           "http://api.weatherapi.com/v1/current.json?key=606e270265f94f12bea91623222403&q=" + city + "&aqi=" + this.apiKey
        )
       .then((response) => response.json())
       .then((data) => this.displayWeather(data)); 

    },
    displayWeather: function (data){
        const { name } = data.location;
        const { icon, text, code } = data.current.condition;
        const { temp_c } = data.current;
        const { wind_kph, humidity } = data.current;
        console.log(name, icon, text, temp_c, humidity, wind_kph);
        document.querySelector(".city").innerText = "Weather in " + name;
        // document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + code + "@2x.png"
        document.querySelector(".description").innerText = text;
        document.querySelector(".temp").innerText = temp_c + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + wind_kph + " km/h"


    }
};