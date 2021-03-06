Метод Math.floor(x) округляет число x до ближайшего меньшего целого числа.

Math.floor(-2.3); // -3
Math.floor(5.2); // 5 
Math.floor(-41.54); // -42
Math.floor(41.54); // 41
Подробнее читайте здесь:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor


Метод Math.ceil(x) производит округление x до ближайшего большего целого числа.

Math.ceil(5.5); // 6
Math.ceil(5.4); // 6
Math.ceil(-5.4); // -5
Math.ceil(-2.5); // -2
Подробнее читайте здесь:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil


Метод Math.round(x) округляет число x до ближайшего целого.

Есть разница в округлении положительных и отрицательных чисел с использованием данного метода:

Если дробная часть положительного числа меньше, чем 0.5, округление будет произведено к ближайшему меньшему целому числу, а если больше или равна 0.5, то – к ближайшему большему целому.
Math.round(10.49); // 10
Math.round(10.5); // 11
Math.round(10.51); // 11
Если дробная часть отрицательного числа меньше или равна 0.5, число будет округлено к ближайшему большему целому, а если больше 0.5, то – к ближайшему меньшему целому.
Math.round(-10.49); // -10
Math.round(-10.5); // -10
Math.round(-10.51); // -11
Подробнее читайте здесь:

(Но! В данном источнике ничего не сказано о работе Math.round() с отрицательными числами.)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
