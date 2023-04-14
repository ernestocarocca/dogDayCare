import "./welcome.css";
import React from "react";
import { Link } from "react-router-dom";
import dog1 from "./img/hundt1.jpg";
import dog2 from "./img/hund2.jpg";
import dog3 from "./img/dog3.jpg";

const Welcome = () => {
  return (
    <section className="welcome">
      <img src={dog1} alt="" />
      <img src={dog2} alt="" />
      <img src={dog3} alt="" />
      <h1>Welcome to the Dog Daycare</h1>
      <p>Go over to the Dogside</p>
      <Link to="/fetchDogs">
        <button className="Button">Yes!</button>
      </Link>
    </section>
  );
};

export default Welcome;
