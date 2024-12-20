"use strict";
/*
 * #1
 *
 * Задача: Разработать функцию `sumArray`, которая принимает массив чисел и возвращает их сумму.
 *
 * Цель: Создание надежной функции, способной обрабатывать массивы чисел разной длины, включая пустые массивы, и возвращать точную сумму их элементов.
 *
 * Требования к реализации:
 * 1. Функция должна принимать один аргумент: `numbers` - массив чисел (`number[]`).
 * 2. Функция должна возвращать сумму элементов массива как число (`number`).
 * 3. Если массив пуст, функция должна возвращать `0`.
 * 4. Функция должна использовать метод `reduce` для вычисления суммы элементов массива.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = sumArray;
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0); // использовал метод reduce
}
console.log(sumArray([1, 2, 3, 4])); // Должно вывести 10
console.log(sumArray([])); // Должно вывести 0
