import React, { useState, useEffect } from "react";
import "./App.css";
// Import Axios
import axios from 'axios'
// Import Constants
import { BASE_URL, API_KEY } from './constants'

// Import Components
import Heading from './components/Heading'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  // States
  const [nasaData, setNasaData] = useState([])

  // Effects
  useEffect(() => {
    // This code will run after the first render only
    axios(`${BASE_URL}?api_key=${API_KEY}`)
      .then(response => {
        // Set response to state
        setNasaData(response.data)
        console.log(response)
      })
      .catch(error => {
        debugger
      })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Heading />
      <Content nasaData={nasaData} />
      <Footer />
    </div>
  );
}

export default App;
