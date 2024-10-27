const LINK_KEY = "LINK";
const TITLE_KEY = "TITLE";

window.onload = async () => {
  const link = localStorage.getItem(LINK_KEY);
  const title = localStorage.getItem(TITLE_KEY);
  await fetchData(link);
  updatePageTitle(title);
};

const fetchData = async (link) => {
  const moviesContainer = document.querySelector("section .container");
  const res = await fetch(link);
  const data = await res.json();

  await data.results.map((ele) => {
    console.log(ele);

    const imgUrl = `https://image.tmdb.org/t/p/w500${ele.poster_path}`;

    moviesContainer.innerHTML += `
    <div class="movie-poster">
                    <img src=${imgUrl}}/>
                    <h3>${ele.title}</h3>
                </div>
      `;
  });
};

const updatePageTitle = (title) => {
  const titleContainer = document.querySelector("h1.section-title");
  titleContainer.textContent = title;
};
updatePageTitle();
