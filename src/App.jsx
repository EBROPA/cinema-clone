import React, { StrictMode } from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./css/App.css";
import "./firebase";
import Navbar from "./components/UI/navbar/Navbar";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
