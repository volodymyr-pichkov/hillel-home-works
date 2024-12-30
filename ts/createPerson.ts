/*

#1

Задача: Разработать функцию createPerson, которая создает объект человека с заданными свойствами.

Цель: Создать универсальную функцию, позволяющую эффективно генерировать объекты человека с определенными характеристиками для последующего использования в программе.

Требования к реализации:

1. Функция должна принимать три параметра: name (строка), age (число), isActive (булевое значение) и явно возвращать объект, соответствующий интерфейсу PersonInterface.

2. Интерфейс PersonInterface должен описывать структуру объекта человека с свойствами name, age и isActive.

3. Функция должна обеспечивать создание объекта с корректными типами свойств согласно PersonInterface.

4. Тип возвращаемого функцией значения должен быть явно указан как PersonInterface, что обеспечивает соответствие возвращаемого объекта определенному интерфейсу.

*/

interface PersonInterface {
    name: string;
    age: number;
    isActive: boolean;
}

function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
    return {
        name,
        age,
        isActive
    };
}

const newPerson = createPerson('Олександр', 31, false);

console.log(newPerson);

export { createPerson };
