const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");
const API_KEY = "e55558d7";

searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();

  if (query.length === 0) {
    resultsContainer.textContent = ""; // очищаем контейнер при удалении текста
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
      resultsContainer.textContent = data.Error; // сообщение об ошибке без HTML
    }
  } catch (error) {
    resultsContainer.textContent = "Ошибка при получении данных. Попробуйте позже."; // сообщение об ошибке без HTML
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
