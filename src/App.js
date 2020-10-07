import React from 'react';
import './App.css';

const api = {
  key: "89474c45df98ac92203bcdd35c3b54b1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

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
      </main>
    </div>
  );
}

export default App;
