import React, { useRef } from 'react';

// Компонент формы без контроля значения поля ввода
const UncontrolledForm = () => {
  // Создание ссылки на поле ввода с помощью useRef
  const inputRef = useRef();

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    // Предотвращаем перезагрузку страницы при отправке формы
    event.preventDefault();
    // Получаем текущее значение поля ввода через ref и выводим его в консоль
    console.log('Submitted:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Метка для поля ввода */}
      <label>
        Name:
        {/* Поле ввода с привязкой к ref, без контроля значения через state */}
        <input type="text" ref={inputRef} />
      </label>
      {/* Кнопка отправки формы */}
      <button type="submit">Submit</button>
    </form>
  );
};

// Экспорт компонента для использования в других частях приложения
export default UncontrolledForm;
