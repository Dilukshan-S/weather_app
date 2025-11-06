# 🌤️ Weather App

A simple, clean, and responsive **Weather Application** that allows users to check the current weather of any city in the world using the [OpenWeatherMap API](https://openweathermap.org/api).

🔗 **Live Demo:** [https://dilukshan-s.github.io/weather_app/](https://dilukshan-s.github.io/weather_app/)

---

## 🖼️ Preview

<img width="1317" height="686" alt="image" src="https://github.com/user-attachments/assets/68eaf68c-c60d-41b0-ad7b-c2cf1c3f61ba" />

---

## 🚀 Features

- 🌍 Search weather by **city name**
- 🌡️ Displays:
  - Current temperature (°C)
  - Weather condition (Sunny, Cloudy, etc.)
  - Minimum and maximum temperature
  - Current date and location
- 📱 **Responsive** design for both desktop and mobile
- ⚡ Fast and lightweight — built with plain HTML, CSS, and JavaScript (no frameworks)

---

## 🧠 How It Works

1. The user enters a **city name** in the search box.  
2. The app fetches weather data from the **OpenWeatherMap API** using `fetch()`.  
3. The returned JSON data is displayed dynamically on the page.

---

## 🛠️ Built With

- **HTML5** – Structure of the app  
- **CSS3** – Styling and layout  
- **JavaScript (ES6)** – Functionality and API calls  
- **OpenWeatherMap API** – Real-time weather data source  

---

## 📦 Project Structure
```
weather_app/
│
├── index.html # Main HTML page
├── style.css # App styling
└── index.js # JavaScript logic (API handling + DOM updates)
```
---

## ⚙️ Setup & Usage

1. **Clone this repository**
   ```
   git clone https://github.com/dilukshan-s/weather_app.git

2. **Navigate into the project folder**
   ```
   cd weather_app
   
3. Open index.html in your browser directly, or use a live server extension (VS Code recommended).

---

## 🔑 API Configuration

This app uses the OpenWeatherMap API.
To use your own API key:

1. Go to OpenWeatherMap and sign up for a free account.

2. Replace the existing key in index.js:
   const api = {
      key: "YOUR_API_KEY_HERE",
      base: "https://api.openweathermap.org/data/2.5/"
    };

---

## ⚠️ Note About Deployment

When deployed, the OpenWeatherMap API might sometimes block direct requests due to CORS restrictions.
If you experience issues:

Use a free proxy service like AllOrigins

Or deploy via Netlify/Render with a simple backend to hide the API key

🧩 Example API Call
  fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=YOUR_API_KEY")
  .then(res => res.json())
  .then(data => console.log(data));

---

## 💡 Future Improvements

Add 5-day weather forecast

Show weather icons dynamically

Display humidity, wind speed, and pressure

Integrate geolocation to auto-detect user’s city

Use local storage to save last searched city

---

## 👨‍💻 Author

Dilukshan S

---

## 📄 License

This project is open-source and available under the MIT License.
