const moviePopup = document.getElementById('moviePopup');
const closePopup = document.getElementById('closePopup');

// Close the popup when the close button is clicked
closePopup.onclick = function() {
    moviePopup.style.display = 'none';
};

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
    if (event.target === moviePopup) {
        moviePopup.style.display = 'none';
    }
};