import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { DogsList } from "./components/dogs/DogsList";
import { WalkerList } from "./components/walkers/WalkerList";
import { CityList } from "./components/cities/CityList";
import { HomePage } from "./components/HomePage";
import { DogDetails } from "./components/dogs/DogDetails";
import { WalkerDetails } from "./components/walkers/WalkerDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="walkers" element={<WalkerList/>} />
        <Route path="cities" element={<CityList />} />
        <Route path="dogs" element={<DogsList/>} />
        <Route path="/dogs/:dogId" element={<DogDetails/>} />
        <Route path = "/walkers/:walkerId" element={<WalkerDetails/>} />
        <Route path="/dogs/new" element={<></>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
