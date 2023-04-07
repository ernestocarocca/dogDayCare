import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <section>
      <h1>welcome to the Dog Daycare</h1>
      <p>vill du gå till hundsidan?</p>;
      <Link to="/fetchDogs">
        <button>ja!</button>
      </Link>
    </section>
  );
};

export default Welcome;
