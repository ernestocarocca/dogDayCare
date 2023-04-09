import "./styleFetchD.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FetchDogs = (props) => {
  const [counter, setCounter] = useState(0);
  const [dogs, setDogs] = useState("dog");
  const fetchDog = () => {
    fetch("https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setDogs(data.record); // sätt dogs till = dogArray
        setDogs(data.record);

        console.log("här", dogs);
      });
  };
  useEffect(() => {
    fetchDog();
  }, []);

  //<img src={dogs[counter].img} alt="img" />

  /*<h1>Sex: {dogs[counter].sex}</h1>
  <h1> Breed: {dogs[counter].breed}</h1>
  <h1>Age:{dogs[counter].age}</h1>
  <h1>Chip Number{dogs[counter].chipNumber}</h1>
  <button
    onClick={() => {
      setCounter((counter + 1) % dogs.length);
   }
      >
        Next Dog
      </button>
   
    <img src={dogs[length - 1].img} alt="img" />
    }*/

  return (
    <div className="showDog">
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <img src={dog.img} alt="img" />
            <h1>Name: {dog.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FetchDogs;
