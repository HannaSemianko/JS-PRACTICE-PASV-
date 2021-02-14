README.md
Array.prototype.forEach-
Array.prototype.forEach() – Функция для каждого элемента массива

Конспект

Метод forEach() выполняет переданную в него функцию один раз для каждого элемента в массиве. Проще говоря, работает, как цикл.

Возвращаемое значение – undefined.

Синтаксис: array.forEach(func(element[, index[, array]])[, thisArg]).

Метод имеет следующие параметры:

обязательный – функция (func), которая, в свою очередь, содержит обязательный параметр – элемент (element), и необязательные: индекс элемента (index) и массив (array), по которому осуществляется проход; необязательный thisArg – значение, используемое в качестве this при вызове функции func. Задание 1. Дан массив строк arr. Вывести в консоль каждый элемент массива отдельно.

const arr = ['One', 'Two', 'Three', '!']; arr.forEach(el => console.log(el)); // "One" // "Two" // "Three" // "!" Задание 2. Дан массив строк arr. Вернуть новый массив строк и их длину, причем длину указать в виде массива рядом со строкой, к которой он относится.

const arr = ['One', 'Two', 'Three', '!']; const newArr = []; arr.forEach(function(el) { newArr.push(el, [el.length]); }); console.log(newArr); // ["One", [3], "Two", [3], "Three", [5], "!", [1]] Обратите внимание! Цикл forEach() нельзя прервать или остановить.

Подробнее читайте здесь:

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach