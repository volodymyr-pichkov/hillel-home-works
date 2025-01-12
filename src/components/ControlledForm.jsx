import React, { useState, useEffect } from 'react';

// Компонент для загрузки и отображения данных с сервера
const ServerDataComponent = () => {
  // Состояние для хранения данных
  const [data, setData] = useState(null);
  // Состояние для отслеживания загрузки
  const [loading, setLoading] = useState(true);
  // Состояние для ошибок
  const [error, setError] = useState(null);

  // useEffect для выполнения побочного эффекта при монтировании компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Выполняем запрос к серверу
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // Преобразуем ответ в формат JSON
        const result = await response.json();
        // Обновляем состояние данными
        setData(result);
        // Устанавливаем состояние загрузки в false
        setLoading(false);
      } catch (error) {
        // В случае ошибки обновляем состояние ошибки
        setError(error);
        // Устанавливаем состояние загрузки в false
        setLoading(false);
      }
    };

    // Запуск асинхронной функции для получения данных
    fetchData();
  }, []); // Пустой массив зависимостей означает, что эффект сработает только при монтировании компонента

  // Если данные загружаются, показываем индикатор загрузки
  if (loading) return <div>Loading...</div>;
  // Если произошла ошибка, показываем сообщение об ошибке
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Посты:</h2>
      <ul>
        {/* Отображаем список постов */}
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Экспорт компонента для использования в других частях приложения
export default ServerDataComponent;