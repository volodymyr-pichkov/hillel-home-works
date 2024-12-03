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
      throw new Error(`HTTP Error: ${response.status}`); // проверка статуса ответа
    }

    const result = await response.json(); // конвертация в json

    console.log("Created Data:", result); // возврат данных
    return result;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`); // обработчик ошибки выполнения запроса
  }
}

export { postData };
