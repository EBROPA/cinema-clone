import Loader from "../components/UI/loading/Loader";
import MovieComponent from "../components/Movie/MovieComponent";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=28678212`;

        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <Loader />;
  }

  return <MovieComponent movie={movie} id={id} />;
};

export default MovieDetails;
