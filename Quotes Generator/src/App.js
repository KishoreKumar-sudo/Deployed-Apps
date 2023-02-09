import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';


const App = () => {
  const [advice, setAdvice] = useState([]);
  const [randomQuote, setRandomQuote] = useState(0);
  const [randomNum, setRandomNum] = useState(0);

  let imgpath = ["","img2","img3","img4","img5","img6","img7","img8","img9","img10"]

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
    setRandomQuote(randomQuote);


    let randomNum = Math.floor(Math.random() * imgpath.length)
    setRandomNum(randomNum)
    console.log(randomNum)
  }

  return <>
    <div className={`app ${randomNum?imgpath[randomNum]:null}`} >
    {/* <div className={`app img1`} > */}
      <div className="card">
        {
          advice.length > 0 ? <>
            <h1 className="heading">{advice[randomQuote].quote}</h1>
            <h3 className="heading">{advice[randomQuote].author}</h3>
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