import React, { useState, useEffect } from "react";
import "./App.css";
// Dependencies
import axios from 'axios'// Import Axios
import styled from 'styled-components' // Import styled-components
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
        setNasaData({hdurl: "", title: "Failed to recieve photo information", explanation: "No Data to show"})
      })
  }, [])

  return (
    <div className="App">
      <Heading />
      <Content nasaData={nasaData} />
      <Footer />
    </div>
  );
}

export default App;
