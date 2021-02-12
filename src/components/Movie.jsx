import React from "react";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  const poster_endpoint = `https://image.tmdb.org/t/p/w1280/`;

  return (
    <div className="container">
      <img
        src={
          poster_path
            ? poster_endpoint + poster_path
            : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        alt={title}
      />
      <div className="infos">
        <h3>{title}</h3>
        <span className={vote_average >= 6 ? "green" : "red"}>
          {vote_average}
        </span>
      </div>

      <div className="overview">
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
