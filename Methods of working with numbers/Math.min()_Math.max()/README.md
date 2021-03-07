Конспект
Метод Math.min([value1[, value2[, ...]]]) возвращает наименьшее число из переданных в него аргументов. Если аргументы не переданы, вернёт Infinity. А если хотя бы один из аргументов не может быть преобразован в число, то в итоге получим NaN.

Math.min(1, 3); // 1
Math.min('2', 2); // 2
Math.min(undefined, 3); // NaN
В случае, если к нам приходят числа в виде массива, перевести их в список аргументов можно с помощью оператора расширения (...value):

let arr = [1, 5, 8];
console.log(Math.min(...arr)); // 1
Подробнее читайте здесь:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min



Конспект
Метод Math.max([value1[, value2[, ...]]]) возвращает наибольшее число из переданных в него аргументов. Если аргументы не переданы, вернёт -Infinity. А если хотя бы один из аргументов не может быть преобразован в число, в итоге получим NaN.

Math.max(1, 3); // 3
Math.max('2', 2); // 2
Math.max(undefined, 3); // NaN
В случае, если к нам приходят числа в виде массива, перевести их в список аргументов можно с помощью оператора расширения (...value):

let arr = [1, 5, 8];
console.log(Math.max(...arr)); // 8
Подробнее читайте здесь:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
