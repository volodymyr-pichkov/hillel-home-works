"use strict";
/*
 * #2
 *
 * Задача: Разработать класс Calculator с методами add и multiply, которые будут логировать вызовы этих методов с помощью декоратора LogMethodCalls.
 *
 * Цель: Создать класс, который позволяет выполнять базовые арифметические операции (сложение и умножение) и логирует детали их вызовов для дальнейшего анализа или отладки.
 *
 * Требования к реализации:
 * 1. Класс Calculator должен содержать метод add, который принимает два числа как аргументы и возвращает их сумму.
 * 2. Класс Calculator должен содержать метод multiply, который принимает два числа как аргументы и возвращает результат их умножения.
 * 3. Оба метода (add и multiply) должны быть снабжены декоратором LogMethodCalls. Этот декоратор должен логировать имя вызываемого метода и переданные ему аргументы.
 * 4. Декоратор LogMethodCalls должен быть реализован таким образом, чтобы его можно было применить к любому методу класса. При вызове метода, снабженного этим декоратором, должен выводиться лог в формате: Calling "<имя_метода>" with arguments: <аргументы_метода>.
 * 5. Все выводы логов должны осуществляться через console.log.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
function LogMethodCalls(target, propertyName, propertyDescriptor) {
    const method = propertyDescriptor.value;
    if (method) {
        propertyDescriptor.value = function (...args) {
            console.log(`Calling "${propertyName}" with arguments: ${JSON.stringify(args)}`);
            return method.apply(this, args);
        };
    }
    return propertyDescriptor;
}
class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
exports.Calculator = Calculator;
__decorate([
    LogMethodCalls,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculator.prototype, "add", null);
__decorate([
    LogMethodCalls,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculator.prototype, "multiply", null);
const calculator = new Calculator();
console.log(calculator.add(2, 3));
console.log(calculator.multiply(3, 4));
