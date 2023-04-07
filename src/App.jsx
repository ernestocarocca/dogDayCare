import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [dogs, setDogs] = useState("dog");
  const fetchDogs = () => {
    fetch("https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDogs(data.record); // sätt dogs till = dogArray
        console.log("här", data);
      });
  };

  useEffect(() => {
    fetchDogs();
  }, []);
  return (
    <div className="App">
      <img src={dogs[counter].img} alt="" />
      <h1>Name: {dogs[counter].name}</h1>
      <h1>Sex: {dogs[counter].sex}</h1>
      <h1> Breed: {dogs[counter].breed}</h1>
      <h1>Age:{dogs[counter].age}</h1>
      <h1>Chip Number{dogs[counter].chipNumber}</h1>
      <button
        onClick={() => {
          setCounter((counter + 1) % dogs.length);
        }}
      >
        Next Dog
      </button>
    </div>
  );
}

export default App;
