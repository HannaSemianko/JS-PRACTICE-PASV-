
Конспект

Для преобразования строки к целому числу используется метод Number.parseInt(string) или функция parseInt(string).

Принципы их работы идентичны:

имеют два параметра: string и radix. Radix – основание системы счисления (число от 2 до 36), которое считается необязательным, но на практике лучше всегда его указывать; пробелы в начале и конце строки не учитываются; если значение, переданное в строку не является string, то неявно преобразовывается; возвращаемое значение – целое число или NaN, если первый символ строки не удалось преобразовать в число. console.log(parseInt('56.5ab', 10)); // 56 console.log(parseInt(' 5abc ', 16)); // 23228 console.log(parseInt(56.15, 10)); // 56 console.log(Number.parseInt('-56.15', 10)); // -56 console.log(Number.parseInt(100, 2)); // 4 console.log(Number.parseInt('$56abc', 16)); // NaN console.log(parseInt('abc5.6')); // NaN Подробнее читайте здесь:

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
