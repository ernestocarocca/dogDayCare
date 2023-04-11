import { Link } from "react-router-dom";
import "./styleFetchD.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FetchDogs = (props) => {
  const [counter, setCounter] = useState(0);
  const [dogs, setDogs] = useState([]);
  const fetchDog = () => {
    fetch("https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setDogs(data.record); // sätt dogs till = dogArray
        setDogs(data.record);
      });
  };
  useEffect(() => {
    fetchDog();
  }, []);

  //<img src={dogs[counter].img} alt="img" />

  return (
    <div>
      {dogs.map((dog, index) => (
        <>
          <img src={dog.img} alt="img" />
          <Link
            to={`/dogDetail/${encodeURIComponent(JSON.stringify(dog))}`}
            className="dog-link"
          >
            {dog.name}
          </Link>
        </>
      ))}
    </div>
  );
};
export default FetchDogs;
