import React, { useState } from 'react';
import './App.css';

const api = {
  key: "89474c45df98ac92203bcdd35c3b54b1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
    });
  }
}

const dateBuilder = (d) => {
let months = ["January", "February", "March", "April", "May", "June", "July", 
              "August", "September", "October", "November", "December"]
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return `${day} ${date} ${month} ${year}`
}
  return (
    <div className="App">
      <main>
      <div className = "header">
            <div className = "header_title">
            <img src="https://cdn4.iconfinder.com/data/icons/sun-11/50/53-512.png" alt=""/>
            <h1>Weather Forecast</h1>    
            </div> 
        </div>
          <div className="inputBar">
            <input type="text" className="inputText" placeholder="Please Enter a City"
            onChange={e => setQuery(e.target.value)} value={query} 
            onKeyPress={search}/>
          <input type="submit" className="inputText"/>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name},{weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
            <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].main}</div>
        </div>
        </div>
        ) : ('')}
        </main>
    </div>
  );
}

export default App;
