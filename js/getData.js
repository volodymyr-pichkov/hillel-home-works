async function getData(segment) {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  try { // конструкция для обработки ошибок
    const url = `${baseUrl}${segment}`; // полный URL (адрес ресурса в интернете)

    const response = await fetch(url); // запрос

    if (!response.ok) {
      console.error(`HTTP Error: ${response.status}`); // если статус ответа не в диапазоне 200-299
      return response.status;
    }

    const data = await response.json(); // конвертация в json

    console.log("Received Data:", data); // возврат данных
    return data;
  } catch (error) {
    console.error("Request failed:", error); // обработчик сетевых ошибок
    return `Error: ${error.message}`;
  }
}

export { getData };