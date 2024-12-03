async function putData(id, data) {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  try { // конструкция для обработки ошибок
    const url = `${baseUrl}/${id}`; // полный URL (адрес ресурса в интернете)

    const response = await fetch(url, {
      method: "PUT", // метод запроса
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

    console.log("Updated Data:", result); // возврат данных
    return result;
  } catch (error) {
    console.error("Request failed:", error); // обработчик ошибки выполнения запроса
    return `Error: ${error.message}`;
  }
}

export { putData };
