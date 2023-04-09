import Welcome from "./components/WelcomPage";
import FetchDogsComp from "./components/FetchDogs";
import dogDetail from "./components/DogDetail";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import dogDetail from "./components/dogDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/fetchDogs" element={<FetchDogsComp />} />
        <Route path="/dogInfo" element={<dogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
