Math.abs() – Абсолютное значение числа (по модулю).

Конспект

Метод Math.abs(x) возвращает абсолютное значение числа, то есть значение числа по модулю (обозначение числа по модулю |x|).

Math.abs(-x) и Math.abs(x) вернут неотрицательное число x.

Если в Math.abs() передать undefined, нечисловую строку или не передавать ничего, он вернёт NaN. А если в него будет передано значение null, то вернёт 0.

Math.abs('-100'); // 100, работает численное преобразование
Math.abs(-200); // 200
Math.abs(null); // 0, работает численное преобразование
Math.abs(''); // 0, работает численное преобразование
Math.abs('10a'); // NaN, в метод передана нечисловая строка
Подробнее смотрите здесь:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
