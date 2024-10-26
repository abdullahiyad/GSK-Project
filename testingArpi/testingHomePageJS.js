// trending movies api link: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
// image path : https://image.tmdb.org/t/p/w500/

const movieList = document.getElementsByClassName("container");

// fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=361d64fd3103c792f86172bac9806914`)
// .then(Response => Response.json())
// .then(data => {

// })

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjFkNjRmZDMxMDNjNzkyZjg2MTcyYmFjOTgwNjkxNCIsIm5iZiI6MTcyOTc3MTg5MC44MzUyMjYsInN1YiI6IjY2ZjJlMWU0YTgyYjAwNTcwMzI2ZjY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.spVvqelYo_3i1_fLLXwTdmQLxOlUTFX5klc_HZfHDng'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        var id = data.id;
        var title = data.title;
        var poster_path = data.poster_path;
        for(let i=0; i<6; i++){
            
        }
    })
    .catch(err => console.error(err));