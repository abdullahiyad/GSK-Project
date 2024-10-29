// const searchField = document.getElementById("search-bar");
// let term;

const searchApi = async (event) => {
  const searchField = event.target;
  console.log(searchField);
  const searchByTemp = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchField.value}&page=1&include_adult=false`;
  await fetch(searchByTemp)
    .then((res) => res.json())
    .then((data) => console.log(data.results));
};
