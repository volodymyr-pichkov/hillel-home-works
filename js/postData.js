async function postData(segment, data) {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  try { // конструкция для обработки ошибок
    const url = `${baseUrl}${segment}`; // полный URL (адрес ресурса в интернете)

    const response = await fetch(url, {
      method: "POST", // метод запроса
      headers: {
        "Content-Type": "application/json", // установка типа содержимого
      },
      body: JSON.stringify(data), // конвертация в json
    });

    if (!response.ok) {
      console.error(`HTTP Error: ${response.status}`); // проверка статуса ответа
      return `Error: HTTP status ${response.status}`;
    }

    const result = await response.json(); // конвертация в json

    console.log("Created Data:", result); // возврат данных
    return result;
  } catch (error) {
    console.error("Request failed:", error); // обработчик ошибки выполнения запроса
    return `Error: ${error.message}`;
  }
}

export { postData };
