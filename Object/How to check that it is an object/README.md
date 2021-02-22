Конспект
Проверка типов с использованием typeof
Для проверки типов в JavaScript присутствует довольно простой оператор typeof. Например:

console.log(typeof "hello"); // "string"
console.log(typeof 50); // "number"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object"
console.log(typeof []); // "object"
console.log(typeof new Date); // "object"
console.log(typeof {}); // "object"
Иногда проверка типов с помощью оператора typeof может ввести в заблуждение, так как для typeof все объекты, null, массивы и даты имеют один и тот же тип – "object". Поэтому различить их при помощи typeof нельзя, и в этом его основной недостаток.

Использование метода toString для определения типа объекта
Mетод toString() позволяет более точно определить тип данных и является более продвинутым методом, чем typeof. Метод можно использовать с любым объектом для получения его класса.

Для использования метода Object.prototype.toString() необходимо вызвать на нём функцию Function.prototype.call() и в скобках в качестве параметра указать объект, который вы хотите исследовать. Метод возвращает тип объекта в виде строки в формате: "[object Type]", где Type является типом объекта.

let obj = {};
console.log(Object.prototype.toString.call(obj));  // "[object Object]"
Вместо записи Object.prototype.toString.call() можно использовать запись {}.toString.call():

console.log({}.toString.call([])); // "[object Array]"
console.log({}.toString.call({})); // "[object Object]"
console.log({}.toString.call(new Date())); // "[object Date]"
console.log({}.toString.call(null)); // "[object Null]"
Использование оператора instanceof
Оператор instanceof позволяет проверить, к какому классу принадлежит объект, с учётом наследования. Синтаксис:

obj instanceof Class
Оператор вернёт true, если obj принадлежит классу Class или наследуемому от него.

Примеры:

let value = {};  // объект
console.log(value instanceof Object); // true (объект принадлежит классу Object)
console.log(value instanceof Array); // false (объект не принадлежит классу Array и не наследует от класса Array)

let arr = [1,2];  // массив
console.log(arr instanceof Object); // true (Array наследует от класса Object)
console.log(arr instanceof Array);  // true (array принадлежит классу Array)
Проверка свойства constructor для объекта
Пример 1. Свойство constructor для объекта.

let value = {};  // объект
console.log(value.constructor.name); // "Object"
console.log(value.constructor === Object); // true
Пример 2. Свойство constructor для массива.

let arr = [];  // массив
console.log(arr.constructor.name); // "Array"
console.log(arr.constructor === Array); // true
ИТОГО (коротко о главном):
let value = {}; // задали объект
// Проверка типа с помощью оператора typeof
console.log(typeof value === 'object'); // true

// Проверка класса с помощью метода объекта toString()
console.log({}.toString.call(value) === '[object Object]'); // true

// Проверка свойства constructor для объекта
console.log(value.constructor === Object); // true

// Использование оператора instanceof
console.log(value instanceof Object); // true 
