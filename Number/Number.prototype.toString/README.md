Метод toString(radix) преобразует число в строковый вид в указанной системе счисления.

Синтаксис: Number.toString([radix]). Здесь radix - необязательный параметр, представляющий основание системы счисления: число от 2 до 36. Если он выходит за пределы указанного диапазона, будет выброшено исключение RangeError. В случае, когда radix не указан, он считается равным 10.

Если необходимо преобразовать отрицательное число в строку, знак минуса будет сохранен.

console.log((100).toString()); // "100"
console.log((-100).toString()); // "-100"
console.log((10).toString(2)); // "1010"
console.log((100).toString(37)); // RangeError
Подробнее читайте здесь:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

