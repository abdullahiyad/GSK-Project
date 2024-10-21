import { getPageLink, SetPageLink } from "./link.js"; // Ensure the import matches the export

const linkValue = document.getElementById("link-value");

const loadPage = (category) => {
  const title = `${category} Movies`;
  const link = `https://www.phoenixMovies.com/category/${category}`;
  SetPageLink(title, link); // Set the category link
  linkValue.textContent = getPageLink(); // Update the displayed link
  localStorage.setItem("pageLink", getPageLink()); // Store the link in local storage
  window.location = "./page2.html";
};

const loadMoviePage = (movie) => {
  const link = `https://www.phoenixMovies.com/movie/${movie}`;
  SetPageLink("movie", link);
  linkValue.textContent = getPageLink();
};
window.loadPage = loadPage; // This line makes loadPage available globally
window.loadMoviePage = loadMoviePage;
