import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DemoHomePage from "../pages/DemoHomePage";
import Movie from "../pages/Movie";
import MyPage from "../pages/MyPage";
import MovieDetails from "../pages/MovieDetails";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DemoHomePage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
