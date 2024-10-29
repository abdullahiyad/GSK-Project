let favList = JSON.parse(localStorage.getItem(FAV_KEY));
favList.map((favMovie)=>{
    const moviesContainer = document.querySelector("section .container");
    moviesContainer.innerHTML += `
        <div class="movie-poster">
            <img src="${favMovie.image}">
            <h3>${favMovie.title}</h3>
        </div>
      `;
  });