let favList = JSON.parse(localStorage.getItem(FAV_KEY));
console.log(favList);
// adding header links : 
addHeaderMoviesLinks();

// get data from favList :
const showFav =  () => {
    loadingActive();
    favList.map((favMovie)=>{
    const moviesContainer = document.querySelector("section .container");
    moviesContainer.innerHTML += `
        <div class="movie-poster" onclick="getDetailsPage(event)">
            <img src="${favMovie.image}">
            <h3>${favMovie.title}</h3>
        </div>
      `;
    })
    loadingDisabled();
}
;
showFav();