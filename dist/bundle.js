/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ts_sumArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/sumArray */ \"./src/ts/sumArray.js\");\n/* harmony import */ var _ts_createUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/createUser */ \"./src/ts/createUser.js\");\n/* harmony import */ var _ts_getOrderStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/getOrderStatus */ \"./src/ts/getOrderStatus.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://ts/./src/main.ts?");

/***/ }),

/***/ "./src/ts/createUser.js":
/*!******************************!*\
  !*** ./src/ts/createUser.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\n/*\n * #2\n *\n * Задача: Разработать функцию createUser, которая создает объект пользователя с заданными свойствами.\n *\n * Цель: Создать функцию, которая позволяет легко генерировать новые объекты пользователей с переданными атрибутами имя, возраст и статус активности, используя определенный тип User.\n *\n * Требования к реализации:\n * 1. Функция должна принимать три параметра: name (строка), age (число) и isActive (булево значение).\n * 2. Функция должна возвращать объект, соответствующий типу User. Тип User должен быть объявлен с использованием ключевого слова `type` и включать свойства name, age и isActive.\n * 3. Возвращаемый объект должен иметь типы свойств, соответствующие объявленному типу User: name как string, age как number, isActive как boolean.\n * 4. Определение типа User должно быть совместимо со структурой объекта, который возвращается функцией, включая порядок и наличие всех свойств.\n * 5. Функция должна правильно обрабатывать случай, когда isActive не передан, и по умолчанию считать этот параметр true.\n *\n */\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.createUser = createUser;\nfunction createUser(name, age) {\n  var isActive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  return {\n    name: name,\n    age: age,\n    isActive: isActive\n  };\n}\nvar newUser = createUser('Анна', 25, true); // Вывод на нового пользователя\nconsole.log(newUser);\n\n//# sourceURL=webpack://ts/./src/ts/createUser.js?");

/***/ }),

/***/ "./src/ts/getOrderStatus.js":
/*!**********************************!*\
  !*** ./src/ts/getOrderStatus.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\n/*\n * #3\n *\n * Задача: Разработать функцию getOrderStatus, которая принимает статус заказа как параметр и возвращает строку с описанием статуса.\n *\n * Цель: Создание функции, способной идентифицировать статус заказа и предоставлять пользователю понятное объяснение текущего состояния заказа.\n *\n * Требования к реализации:\n * 1. В коде должен быть присутствовать enum OrderStatus с необходимыми статусами.\n * 2. enum OrderStatus должен иметь статусы: 'Pending', 'Shipped', 'Delivered', 'Cancelled'.\n * 3. Функция должна использовать enum OrderStatus для определения возможных статусов заказа.\n * 4. Функция должна принимать один параметр типа OrderStatus и возвращать строку с описанием статуса.\n * 5. Функция должна правильно обрабатывать каждый статус заказа, возвращая соответствующее сообщение:\n * -  'Pending' -> 'Заказ ожидает обработки',\n * -  'Shipped' -> 'Заказ был отправлен',\n * -  'Delivered' -> 'Заказ доставлен',\n * -  'Cancelled' -> 'Заказ отменен'\n * -  выбросить ошибку с текстом 'Неизвестный статус заказа' в любом другом случае.\n * 6. Параметры функции и ее тип возвращаемого значения должны быть явно типизированы.\n *\n */\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.OrderStatus = void 0;\nexports.getOrderStatus = getOrderStatus;\n// 1) Перечислил enum\n// 2) Объявил функцию, использовал switch-case\nvar OrderStatus;\n(function (OrderStatus) {\n  OrderStatus[\"Pending\"] = \"Pending\";\n  OrderStatus[\"Shipped\"] = \"Shipped\";\n  OrderStatus[\"Delivered\"] = \"Delivered\";\n  OrderStatus[\"Cancelled\"] = \"Cancelled\";\n})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));\nfunction getOrderStatus(status) {\n  switch (status) {\n    // switch юзаю когда много вариантов выбора\n    case OrderStatus.Pending:\n      return 'Заказ ожидает обработки';\n    case OrderStatus.Shipped:\n      return 'Заказ был отправлен';\n    case OrderStatus.Delivered:\n      return 'Заказ доставлен';\n    case OrderStatus.Cancelled:\n      return 'Заказ отменен';\n    default:\n      // Если значение status не совпадает ни с одним из перечисленных случаев\n      throw new Error('Неизвестный статус заказа');\n    //  выброска ошибки\n  }\n}\nconsole.log(getOrderStatus(OrderStatus.Pending));\nconsole.log(getOrderStatus(OrderStatus.Shipped));\nconsole.log(getOrderStatus(OrderStatus.Delivered));\nconsole.log(getOrderStatus(OrderStatus.Cancelled));\n\n//# sourceURL=webpack://ts/./src/ts/getOrderStatus.js?");

/***/ }),

/***/ "./src/ts/sumArray.js":
/*!****************************!*\
  !*** ./src/ts/sumArray.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\n/*\n * #1\n *\n * Задача: Разработать функцию `sumArray`, которая принимает массив чисел и возвращает их сумму.\n *\n * Цель: Создание надежной функции, способной обрабатывать массивы чисел разной длины, включая пустые массивы, и возвращать точную сумму их элементов.\n *\n * Требования к реализации:\n * 1. Функция должна принимать один аргумент: `numbers` - массив чисел (`number[]`).\n * 2. Функция должна возвращать сумму элементов массива как число (`number`).\n * 3. Если массив пуст, функция должна возвращать `0`.\n * 4. Функция должна использовать метод `reduce` для вычисления суммы элементов массива.\n *\n */\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.sumArray = sumArray;\nfunction sumArray(numbers) {\n  return numbers.reduce(function (acc, curr) {\n    return acc + curr;\n  }, 0); // использовал метод reduce\n}\nconsole.log(sumArray([1, 2, 3, 4])); // Должно вывести 10\nconsole.log(sumArray([])); // Должно вывести 0\n\n//# sourceURL=webpack://ts/./src/ts/sumArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;