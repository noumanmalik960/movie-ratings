import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Search from "./components/Search";

const App = () => {
  const [movies, setMovies] = useState(["2", "4"]);

  const endpoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=de746b24a59fdadde59722fd6ecf3eb0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((res) => {
        // console.log("this is API response", res.results);
        setMovies(res.results);
        // this below line will show the initial movies (2 and 4) because useEffect runs AFTER every render
        // console.log("these are the movies", movies);
      });
  }, []);

  return (
    <div>
      <Search setMovies={setMovies} />
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default App;
