const api = {
  key: "2fa73590fd8b5a4c6e68098ad5625395",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  if (!weather || (weather.cod && weather.cod !== 200)) {
    alert("City not found. Please try again.");
    return;
  }

  console.log(weather);

  const city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const now = new Date();
  const localOffsetMs = now.getTimezoneOffset() * 60000; // your local offset in ms
  const utcNow = now.getTime() + localOffsetMs; // convert your local time to UTC
  const cityTime = new Date(utcNow + weather.timezone * 1000); // apply city offset

  // display date using your dateBuilder
  // Display formatted date and time
  const dateEl = document.querySelector(".location .date");
  dateEl.innerText = dateBuilder(cityTime);

  let timeEl = document.querySelector(".location .time");
  if (!timeEl) {
    timeEl = document.createElement("div");
    timeEl.classList.add("time");
    document.querySelector(".location").appendChild(timeEl);
  }

  function renderCityTime() {
    const now = new Date();
    const utcNow = now.getTime() + now.getTimezoneOffset() * 60000;
    const cityNow = new Date(utcNow + weather.timezone * 1000);
    timeEl.innerText = cityNow.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  renderCityTime();
  if (timeEl._clockInterval) clearInterval(timeEl._clockInterval);
  timeEl._clockInterval = setInterval(renderCityTime, 1000);
  // ---- Weather Info ----
  const temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  const weatherEl = document.querySelector(".current .weather");
  weatherEl.innerText = weather.weather[0].main;

  const hilow = document.querySelector(".hi-low");
  hilow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
