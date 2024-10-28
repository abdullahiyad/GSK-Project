const API_KEY = "361d64fd3103c792f86172bac9806914";
const term = "hobbit";
const trendingMovies = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
const trendingTVShow = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;
const categories = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const allMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;
<<<<<<< HEAD
const searchByTemp = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
  term
)}&page=1&include_adult=false`;
let dataShow = [];
const moviesContainer = document.getElementById("container");
fetch(searchByTemp)
  .then((res) => res.json())
  .then((data) => console.log(data.results));

const fetchData = async () => {
  const res = await fetch(
    ``
  );
  const data = await res.json();
  dataShow = await data.results.map((ele) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${ele.poster_path}`;

    moviesContainer.innerHTML += `
      <div>
=======
const searchByTemp = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`;

// let dataShow = [];

const moviesContainer = document.getElementById("container");
// fetch(searchByTemp)
//   .then((res) => res.json())
//   .then((data) => console.log(data.results));

const fetchData = async () => {
  const res = await fetch(trendingMovies);
  const data = await res.json();

  await data.results.map((ele) => {
    console.log(ele);

    const imgUrl = `https://image.tmdb.org/t/p/w500${ele.poster_path}`;

    moviesContainer.innerHTML += `
      <div >

>>>>>>> a4add7e1f8c228556e2d841b3fa0bc8991a7223a
        <img src=${imgUrl}}/>
      <h4>${ele.title}</h4>
      </div>`;
  });
};
fetchData();
