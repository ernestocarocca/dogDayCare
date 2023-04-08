import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <section>
      <h1>Welcome to the Dog Daycare</h1>
      <p>Go over to the Dogside</p>
      <Link to="/fetchDogs">
        <button>Yes!</button>
      </Link>
    </section>
  );
};

export default Welcome;
