import React, { useEffect, useState } from "react";
import cl from "./MovieComponent.module.css";
import axios from "axios";

const MovieComponent = ({ movie, id }) => {
  const [trailerMovie, setTrailerMovie] = useState(null);
  const [fullPlot, setFullPlot] = useState(null);

  useEffect(() => {
    const getFullPlot = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?t=${movie.Title}&y=${movie.Year}&plot=full&apikey=28678212`
        );

        const fullPlotURL = response.data.Plot;
        setFullPlot(fullPlotURL);
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const getMovieTrailer = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?q=${id}+trailer&key=AIzaSyA_6aFcCE7Yd88EkoVLmx-Xo-Y3dVvhOc4`
        );

        const trailerId = response.data.items[0].id.videoId;

        const trailerUrl = `https://www.youtube.com/embed/${trailerId}`;

        setTrailerMovie(trailerUrl);
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    getFullPlot();
    getMovieTrailer();
  }, [id, movie]);

  return (
    <div className={cl.mainPage}>
      <div className={cl.Info}>
        <div className={cl.mainInfo}>
          <img className={cl.imgSet} src={movie.Poster} alt="img" />
          <iframe
            className={cl.videoSet}
            width="560"
            height="315"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={trailerMovie}
          ></iframe>
          <h3 className={cl.trailer}>Трейлер</h3>
        </div>
        <div className={cl.wrapper__leftInfo}>
          <div className={cl.leftInfo}>
            <span className={cl.titleSet}>
              {movie.Title} ({movie.Year})
            </span>
            <h2 className={cl.aboutMovie}>Фильм о фильме</h2>
            <ul className={cl.navbar}>
              <li className={cl.navbarLi}>
                Вышел <span className={cl.ulSpan}>{movie.Released}</span>
              </li>
              <li className={cl.navbarLi}>
                Идет <span className={cl.ulSpan}>{movie.Runtime}</span>
              </li>
              <li className={cl.navbarLi}>
                Жанры <span className={cl.ulSpan}>{movie.Genre}</span>
              </li>
              <li className={cl.navbarLi}>
                Режиссер<span className={cl.ulSpan}> {movie.Director}</span>
              </li>
              <li className={cl.navbarLi}>
                Художник <span className={cl.ulSpan}>{movie.Writer}</span>
              </li>
              <li className={cl.navbarLi}>
                Актеры <span className={cl.ulSpan}>{movie.Actors}</span>
              </li>
              <li className={cl.navbarLi}>
                Сборы <span className={cl.ulSpan}>{movie.BoxOffice}</span>
              </li>{" "}
              <li className={cl.navbarLi}>
                Страна <span className={cl.ulSpan}>{movie.Country}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={cl.leftNavbar}>
          <ul className={cl.navbar}>
            <li className={cl.navbarLi}>
              <span className={cl.ratingTag}>
                Рейтинг : {movie.Ratings[0].Value}
              </span>
            </li>
            <li className={cl.navbarLi}>
              <span className={cl.PlotSet}>Сюжет : {fullPlot}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
