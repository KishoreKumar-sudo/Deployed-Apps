import './App.css';
import API from './API/Axiosconfig'
import { useState, useEffect } from 'react'
function App() {
  //let's return a destructured array from the useState Hook
  //for thread functionality management we're using async await
  const [movies, setMovies] = useState();
  
  const getMovies = async () => {
    try {
      const response = await API.get("/API/v1/movies");
      setMovies(response.data)
    } 
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
