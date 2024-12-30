"use strict";
/*
 * #3
 *
 * Задача: Реализовать функционал для создания профиля пользователя в пространстве имен UserProfile.
 *
 * Цель: Обеспечить возможность создавать объект профиля с уникальным идентификатором, именем и электронной почтой.
 *
 * Требования к реализации:
 * 1. Создать namespace `UserProfile`, который будет контейнером для определения интерфейса профиля и функций.
 * 2. Определить внутри `UserProfile` интерфейс `ProfileInterface`, который должен содержать свойства `id` (string), `name` (string) и `email` (string).
 * 3. Реализовать функцию `createProfile` внутри `UserProfile`, которая принимает `name` и `email`, создает и возвращает объект `ProfileInterface` с уникальным `id`, указанным именем и электронной почтой.
 * 4. Функция `generateId` должна быть приватной внутри `UserProfile` и служить для генерации уникального идентификатора для каждого профиля.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
var UserProfile;
(function (UserProfile) {
    function createProfile(name, email) {
        return {
            id: generateId(),
            name,
            email
        };
    }
    UserProfile.createProfile = createProfile;
    function generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
})(UserProfile || (exports.UserProfile = UserProfile = {}));
const profile = UserProfile.createProfile('John Doe', 'john@example.com');
console.log(profile);
