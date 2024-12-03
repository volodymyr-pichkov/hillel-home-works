async function deleteData(id) {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  try { // конструкция для обработки ошибок
    const url = `${baseUrl}/${id}`; // полный URL (адрес ресурса в интернете)

    const response = await fetch(url, {
      method: "DELETE", // метод запроса
    });

    if (response.ok) {
      console.log(`Post with id ${id} has been successfully deleted.`); // проверка статуса ответа
      return true;
    } else {
      throw new Error(
        `Failed to delete post with id ${id}. Status: ${response.status}`
      );
    }
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`); // обработчик ошибки выполнения запроса
  }
}

export { deleteData };
