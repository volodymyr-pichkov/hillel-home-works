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
      console.error(
        `Failed to delete post with id ${id}. Status: ${response.status}`
      );
      return response.status;
    }
  } catch (error) {
    console.error(`Error during deletion: ${error.message}`); // обработчик ошибки выполнения запроса
    return `Error: ${error.message}`;
  }
}

export { deleteData };
