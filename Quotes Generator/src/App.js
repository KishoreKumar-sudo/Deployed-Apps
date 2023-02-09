import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';


const App = () => {
  const [advice, setAdvice] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((response) => {
        let newQuote = response.data.quotes
        setAdvice(newQuote);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const fetchAdvice = () => {
    let randomQuote = Math.floor(Math.random() * advice.length)
    setRandomNumber(randomQuote);
    console.log(advice[randomNumber].quote);
  }

  return <>
    <div className="app">
      <div className="card">
        {
          advice.length > 0 ? <>
            <h1 className="heading">{advice[randomNumber].quote}</h1>
            <h3 className="heading">{advice[randomNumber].author}</h3>
          </> : null
        }


        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE..!</span>
        </button>
      </div>
    </div>
  </>
}

export default App