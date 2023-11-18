import React, { useState } from "react";
import classes from "./MyWrapper.module.css";

const MyWrapper = ({ movies, currentImg }) => {
  return (
    <>
      <div className={classes.moviePage}>
        {movies.map((movie, index) => (
          <div
            key={index + 1}
            onClick={() => currentImg(movie.imdbID)}
            className={classes.wrapper_page}
          >
            <img src={movie.Poster} alt="img" />
          </div>
        ))}
      </div>
    </>
  );
};

export default MyWrapper;
