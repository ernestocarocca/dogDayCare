import "./styleDogDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchDogs from "./FetchDogs";
import { useLocation } from "react-router-dom";
const dogDetail = (props) => {
  const [currentDog, setCurrentDog] = useState([]);
  let navigate = useNavigate();
  const params = useParams();
  const dog = JSON.parse(decodeURIComponent(params.dogName));

  return (
    <div className="DD">
      <img src={dog.img} alt="" />
      <h3>Name: {dog.name}</h3>
      <h3>Age: {dog.age}</h3>
      <h3>Breed: {dog.breed}</h3>
      <h3>Sex: {dog.sex}</h3>
      <h4>Chipnr: {dog.chipNumber}</h4>
    </div>
  );
};
export default dogDetail;
