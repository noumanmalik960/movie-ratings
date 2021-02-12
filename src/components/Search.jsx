import React from "react";

const Search = ({ setMovies }) => {
  const [search, setSearch] = React.useState("");

  const searchAPI =
    "https://api.themoviedb.org/3/search/movie?api_key=de746b24a59fdadde59722fd6ecf3eb0&language=en-US&query=";

  const submitForm = (e) => {
    e.preventDefault();

    fetch(searchAPI + search)
      .then((res) => res.json())
      .then((result) => setMovies(result.results));
    setSearch("");
  };

  return (
    <div className="search">
      <form onSubmit={submitForm}>
        <input
          type="search"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
