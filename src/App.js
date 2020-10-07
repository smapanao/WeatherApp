import React from 'react';
import './App.css';

const api = {
  key: "89474c45df98ac92203bcdd35c3b54b1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

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
        <div class="inputBar">
          <input type="text" class="inputText" placeholder="Please Enter a City"/>
          <input type="submit" class="inputText"/>
        </div>
        <div className="location-box">
          <div className="location">Mississauga, ON</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
        <div className="temp">15°</div>
        <div className="weather">Sunny</div>
        </div>
        </main>
    </div>
  );
}

export default App;
