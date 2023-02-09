import React, { Component } from 'react'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = { advice: '' }

  componentDidMount() {
    this.fetchAdvice();
    // console.log('Component Did Mount');
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {

        this.setState({ advice:response.data.slip.advice })

        // console.log(advice)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {

    // const { advice } = this.state

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button  className="button">
            <span onClick={this.fetchAdvice}>GIVE ME ADVICE..!</span>
          </button>
        </div>
      </div>


    )
  }
}

export default App