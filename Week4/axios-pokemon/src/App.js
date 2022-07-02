import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [pokeData, setPokeData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        console.log(response.data.results);
        setPokeData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>807 Pokemon List</h1>
      <ul>
        {pokeData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
