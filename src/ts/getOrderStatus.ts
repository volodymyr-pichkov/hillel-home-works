/*
 * #3
 *
 * Задача: Разработать функцию getOrderStatus, которая принимает статус заказа как параметр и возвращает строку с описанием статуса.
 *
 * Цель: Создание функции, способной идентифицировать статус заказа и предоставлять пользователю понятное объяснение текущего состояния заказа.
 *
 * Требования к реализации:
 * 1. В коде должен быть присутствовать enum OrderStatus с необходимыми статусами.
 * 2. enum OrderStatus должен иметь статусы: 'Pending', 'Shipped', 'Delivered', 'Cancelled'.
 * 3. Функция должна использовать enum OrderStatus для определения возможных статусов заказа.
 * 4. Функция должна принимать один параметр типа OrderStatus и возвращать строку с описанием статуса.
 * 5. Функция должна правильно обрабатывать каждый статус заказа, возвращая соответствующее сообщение:
 * -  'Pending' -> 'Заказ ожидает обработки',
 * -  'Shipped' -> 'Заказ был отправлен',
 * -  'Delivered' -> 'Заказ доставлен',
 * -  'Cancelled' -> 'Заказ отменен'
 * -  выбросить ошибку с текстом 'Неизвестный статус заказа' в любом другом случае.
 * 6. Параметры функции и ее тип возвращаемого значения должны быть явно типизированы.
 *
 */


// 1) Перечислил enum
// 2) Объявил функцию, использовал switch-case

enum OrderStatus { // Перечисление, нужно дублировать в строку каждый элемент
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled'
}

function getOrderStatus(status: OrderStatus): string { // Принимает параметр status типа OrderStatus
  switch (status) { // switch юзаю когда много вариантов выбора
    case OrderStatus.Pending:
      return 'Заказ ожидает обработки';
    case OrderStatus.Shipped:
      return 'Заказ был отправлен';
    case OrderStatus.Delivered:
      return 'Заказ доставлен';
    case OrderStatus.Cancelled:
      return 'Заказ отменен';
    default: // Если значение status не совпадает ни с одним из перечисленных случаев
      throw new Error('Неизвестный статус заказа'); //  выброска ошибки
  }
}

console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));

export { OrderStatus, getOrderStatus }
