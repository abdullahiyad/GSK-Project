let favList = JSON.parse(localStorage.getItem(FAV_KEY));
console.log(favList);

const showFav =  () => 
    favList.map((favMovie)=>{
    const moviesContainer = document.querySelector("section .container");
    moviesContainer.innerHTML += `
        <div class="movie-poster" onclick="showPopup(event)">
            <img src="${favMovie.image}">
            <h3>${favMovie.title}</h3>
        </div>
      `;
});
showFav();