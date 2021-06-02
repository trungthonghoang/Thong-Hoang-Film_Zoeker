//  De UL/parent-node waar alle movies aan worden geplakt
const movieList = document.getElementById("whereTheMoviesGo");

// Functie om films toe te voegen aan de DOM
function addMoviesToDom(movies) {
  //  Door alle movies itereren en Li's maken
  movieList.innerHTML = " ";

  movies.forEach((movie) => {
    const listItem = document.createElement("li");

    const newImage = document.createElement("img");
    newImage.src = movie.Poster;

    const newLink = document.createElement("a");
    newLink.href = "https://www.imdb.com/title/" + movie.imdbID;
    newLink.target = "_blank";

    //  De gemaakte elementen aan elkaar verbinden
    listItem.appendChild(newLink);
    newLink.appendChild(newImage);
    movieList.appendChild(listItem);
  });
}

addMoviesToDom(movies);

// Functie voor de radionbuttons
function addEventListeners() {
  // Buttons selecteren
  const radioButtons = document.getElementsByName("filmFilter");
  // Over de buttons itereren en een event aan vastmaken
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", handleOnChangeEvent);
  });
}

// Functie laten afvuren zodra de DOM is geladen
document.addEventListener("DOMContentLoaded", (event) => {
  addEventListeners();
});

// Functie om erachter te komen op welke radiobutton geclicked is, inclusief een switch-statement
function handleOnChangeEvent(event) {
  switch (event.target.value) {
    case "princess":
      filterMovies("Princess");
      break;
    case "x-men":
      filterMovies("X-Men");
      break;
    case "avengers":
      filterMovies("Avengers");
      break;
    case "batman":
      filterMovies("Batman");
      break;
    default:
      "latest";
      filterLatestMovies();
      break;
  }
}

// Functie voor het filteren van de films
function filterMovies(wordInMovieTitle) {

  const filteredMovies = movies.filter((movie) => {
    return movie.Title.includes(wordInMovieTitle);
  });
  addMoviesToDom(filteredMovies);
}

// Functie voor de meest recente films
function filterLatestMovies() {

  const latestMovie = movies.filter((movie) => {
    return movie.Year >= 2014;
  });
  addMoviesToDom(latestMovie);
}

