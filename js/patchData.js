async function patchData(id, data) {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  try { // конструкция для обработки ошибок
    const url = `${baseUrl}/${id}`; // полный URL (адрес ресурса в интернете)

    const response = await fetch(url, {
      method: "PATCH", // метод запроса
      headers: {
        "Content-Type": "application/json", // установка типа содержимого
      },
      body: JSON.stringify(data), // конвертация в json
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const result = await response.json(); // конвертация в json

    console.log("Updated Data:", result); // возврат данных
    return result;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`); // обработчик ошибки выполнения запроса
  }
}

export { patchData };
