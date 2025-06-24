// Array to store movie titles
let movieWatchlist = [];
// Function to add a movie to the watchlist
function addMovie() {
    const movieInput = document.getElementById('movieInput');
    const movieTitle = movieInput.value.trim();
     if (movieTitle === '') {
        alert("Please enter a movie title.");
        return;
    }
// Add movie to the array
    movieWatchlist.push(movieTitle);
    movieInput.value = ''; // Clear input field
// Update the displayed list
    displayMovies();
}
// Function to display movies in the watchlist
function displayMovies() {
    const movieListContainer = document.getElementById('movieList');
    movieListContainer.innerHTML = ''; // Clear the list
    movieWatchlist.forEach((movie, index) => {
        const movieItem = document.createElement('li');
        movieItem.textContent = movie;
// Create "Watched" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Watched';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => removeMovie(index);
        movieItem.appendChild(removeBtn);
        movieListContainer.appendChild(movieItem);
    });
}
// Function to remove a movie from the watchlist
function removeMovie(index) {
    movieWatchlist.splice(index, 1); // Remove movie by index
    displayMovies(); // Refresh list
}
// Event listener for the "Add Movie" button
document.getElementById('addMovieBtn').addEventListener('click', addMovie);
// Optional: Enable 'Enter' key to add movie
document.getElementById('movieInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addMovie();
    }
});