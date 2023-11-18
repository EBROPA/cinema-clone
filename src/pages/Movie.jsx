import React, { useState, useEffect } from "react";
import MyWrapper from "../components/UI/wrapper/MyWrapper";
import Loader from "../components/UI/loading/Loader";
import MyInput from "../components/UI/input/MyInput";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState();
  const [testMoviesState, setTestMoviesState] = useState(false);
  const [searchMovie, setSearchMovie] = useState("");
  const [indexId, setIndexId] = useState("");
  const navigate = useNavigate();

  const getMovie = async () => {
    setTestMoviesState(true);

    const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=28678212`;

    try {
      const response = await fetch(url);
      const responseJSON = await response.json();

      if (responseJSON && responseJSON.Search) {
        const filteredMovies = responseJSON.Search.filter((movie) =>
          movie.Title.toLowerCase().includes(searchMovie.toLowerCase())
        );

        setMovies(filteredMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTestMoviesState(false);
    }
  };

  const currentImg = async (index) => {
    setIndexId(index);
  };

  const getMovieId = async () => {
    const urlId = `http://www.omdbapi.com/?i=${indexId}&apikey=28678212`;
    navigate(`/movie/${indexId}`);
    try {
      const responseId = await fetch(urlId);
      const responseIdJSON = await responseId.json();

      console.log(responseIdJSON);

      setCurrentMovie(responseIdJSON);
    } catch (e) {
      console.e(e);
    }
  };

  useEffect(() => {
    getMovie();
    getMovieId();
  }, [searchMovie, indexId]);

  const searchCurrentMovie = (event) => {
    setSearchMovie(event.target.value);
    try {
      getMovie();
    } catch (e) {
      console.e(e);
    }
  };

  return (
    <div>
      {testMoviesState ? (
        <div>
          <MyInput
            value={searchMovie}
            onChange={searchCurrentMovie}
            placeholder={"Enter movie"}
          ></MyInput>

          <Loader />
        </div>
      ) : (
        <div>
          <MyInput
            value={searchMovie}
            onChange={searchCurrentMovie}
            placeholder={"Enter movie"}
          ></MyInput>
          <MyWrapper movies={movies} currentImg={currentImg} />
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Movie;
