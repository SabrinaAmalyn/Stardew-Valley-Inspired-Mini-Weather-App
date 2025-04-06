# 👩‍🌾☁️ Stardew Valley Themed Mini Weather App 

This project is a Stardew Valley–themed weather application that displays real-time weather information for cities in Malaysia, using a cozy and playful design. 

![image](https://github.com/user-attachments/assets/887fd454-519a-4f25-964b-5c0211d85471)


## ⭐ Features:

1. Takes user input (city name) through a search bar.

2. Fetches geographical coordinates (longitude & latitude) specifically within Malaysia using the OpenWeather Geocoding API (with country code 60).

3. Retrieves current weather data using the OpenWeather Current Weather API.

4. Maps weather condition codes to custom Stardew Valley–style icons for a playful, game-inspired look.

5. Validates input and displays alerts for empty or invalid entries.

6. Dynamically updates the webpage with weather data and visuals.


## 🛠️ Setup Instructions
To use this Stardew-themed weather app, follow the steps below:

1. Download the Project Files

- Head over to the GitHub repository where the project is hosted.

- Download the full project folder as a .zip file and extract it to your desired location.

2. Create an OpenWeather Account

- Visit https://openweathermap.org/ and sign up for a free account.

- Once registered, go to your profile and navigate to the API keys section.

- Copy your personal API key.

3. Insert Your API Key into the Project

- Open the script.js file inside the project folder.

- Find the line:
  > const apiKey = "..."

- Replace the string inside the quotes with your own API key from OpenWeather.

4. Adjust the Country Code (Optional)

- By default, the app is set up to work with Malaysia using the country code 60.

- If you want to fetch weather data for a different country, change the countryCode variable in the getLonAndLat() function to match your target country’s code (e.g., 1 for USA, 91 for India).

5. Run the Project

- Open the index.html file in your browser.

- Type in a city name and hit the search button to see the current weather with a Stardew Valley–inspired visual.

## ⚠️ Note

This project was created primarily to practice JavaScript, especially API usage and DOM manipulation. Web responsiveness and mobile layout adjustments were not included in this version. If I had more time, I’d love to add the Stardew Valley weather forecaster and his quirky commentary to really bring the theme to life and make the experience even more fun. I encourage you to try adding it yourself—it's a great way to make the project uniquely yours and take it to the next level!

