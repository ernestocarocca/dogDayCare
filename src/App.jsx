import Welcome from "./components/WelcomPage";
import FetchDogsComp from "./components/FetchDogs";
import DogDetail from "./components/DogDetail";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FetchDogs from "./components/FetchDogs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/fetchDogs" element={<FetchDogsComp />} />
        <Route path="/dogDetail/:dogName" element={<DogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
