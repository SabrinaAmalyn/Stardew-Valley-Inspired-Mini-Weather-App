async function fetchWeather() {
    let searchInput = document.getElementById("search").value;
    let weatherDataSection = document.getElementById("weather-data");

    weatherDataSection.style.display = "block";
    const apiKey = ""; //Insert your own api key here!

    if (searchInput === "") {
        alert("Please enter a city name");
        return;
    }

    async function getLonAndLat() {
        const countryCode = 60;
        const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}`;

        const response = await fetch(geocodeURL);

        if (!response.ok) {
            alert("City not found");
            return;
        }

        const data = await response.json();

        if (data.length === 0) {
            alert("City not found");
            return;
        } else {
            return { lon: data[0].lon, lat: data[0].lat };
        }
    }

    async function getWeatherData(lon, lat) {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response = await fetch(weatherURL);

        if (!response.ok) {
            alert("Weather data not found");
            return;
        }

        const data = await response.json();
        const weatherCode = data.weather[0].id;

        // 🔽 Define the mapping only after data is available
        function getStardewWeatherIcon(weatherCode) {
            if (weatherCode >= 200 && weatherCode < 300) {
                return "StatusStorm.gif";
            } else if (
                (weatherCode >= 300 && weatherCode < 400) ||
                (weatherCode >= 500 && weatherCode < 505) ||
                (weatherCode >= 520 && weatherCode < 532)
            ) {
                return "StatusRain.gif";
            } else if (weatherCode === 511 || (weatherCode >= 600 && weatherCode < 700)) {
                return "StatusSnow.png";
            } else if (weatherCode >= 700 && weatherCode < 800) {
                return "StatusWindFall.gif";
            } else if (weatherCode === 800) {
                return "StatusSun.gif";
            } else if (weatherCode === 801) {
                return "StatusWindSpring.gif";
            } else if (weatherCode >= 802 && weatherCodee <= 804) {
                return "StatusWindFall.gif";
            } else {
                return "StatusGreenRain.gif"; // fallback
            }
        }

        const stardewIcon = getStardewWeatherIcon(weatherCode);

        weatherDataSection.innerHTML = `
            <img src="images/${stardewIcon}" alt="Weather Icon">
            <h2>${data.name}</h2>
            <p>${data.main.temp} °C</p>
            <p>${data.weather[0].description}</p>
        `;

        weatherDataSection.style.display = "flex";
    }

    document.getElementById("search").value = "";
    const geoCodeData = await getLonAndLat();
    if (geoCodeData) {
        getWeatherData(geoCodeData.lon, geoCodeData.lat);
    }
}
