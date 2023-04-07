import Welcome from "./components/WelcomPage";
import FetchDogsComp from "./components/FetchDogs";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/fetchDogs" element={<FetchDogsComp />} />
      </Routes>
    </div>
  );
}

export default App;
