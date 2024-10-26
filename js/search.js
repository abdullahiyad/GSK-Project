const searchField = document.getElementById("search-bar");
let term;
const API_KEY = "361d64fd3103c792f86172bac9806914";

const SearchAPI = async () => {
  const searchByTemp = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchField.value}&page=1&include_adult=false`;
  await fetch(searchByTemp)
    .then((res) => res.json())
    .then((data) => console.log(data.results));
};
