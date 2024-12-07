const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");
const API_KEY = "e55558d7";

searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();

  if (query.length === 0) {
    resultsContainer.innerHTML = ""; // если пользователь удаляет весь текст, контейнер с результатами очищается
    return;
  }

  try {
    const response = await fetch( // отправляет HTTP-запрос к OMDB API
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await response.json();

    if (data.Response === "True") { // успешный ответ от API
      displayResults(data.Search); // массив фильмов, найденных по запросу
    } else {
      resultsContainer.innerHTML = `<p>${data.Error}</p>`; // если API возвращает ошибку (например, "Movie not found!"), сообщение отображается в контейнере
    }
  } catch (error) {
    resultsContainer.innerHTML =
      "<p>Ошибка при получении данных. Попробуйте позже.</p>"; // если запрос не удаётся (например, из-за отсутствия интернета или проблем с сервером), выводится сообщение об ошибке
    console.error("Ошибка запроса:", error);
  }
});

function displayResults(movies) {
  resultsContainer.innerHTML = movies
    .map( // проходит по каждому фильму и создаёт HTML-код для его отображения
      (movie) => `
    <div class="movie-item">
      <img src="${
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/150" // если у фильма нет постера (movie.Poster === "N/A"), используется заглушка (https://via.placeholder.com/150)
      }" alt="${movie.Title}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
      <p>${movie.Type}</p>
    </div>
  `
    )
    .join(""); // объединяет все элементы массива в строку, чтобы вставить их в DOM
}
