

Метод Number.parseFloat(string) и функция parseFloat(string) работают аналогично – принимают строку и возвращают десятичное число.

Если в передаваемом значении будут содержаться символы отличные от:

цифр от 0 до 9, знаков: плюс, минус, возведения в степень (имеется в виду экспоненциальная запись с e, например: 1 000 000 000 = 1e9), разделительной точки, будет возвращено значение, предшествующее этому символу.

console.log(parseFloat('2.05')); // 2.05 console.log(Number.parseFloat('32.32.32')); //32.32 console.log(parseFloat('11 + true')); // 11 console.log(Number.parseFloat('1t')); // 1 console.log(parseFloat('2e+1')); // 20 console.log(Number.parseFloat('.15a')); // 0.15 console.log(Number.parseFloat('-18+2')); // -18 Если первый символ в строке невозможно преобразовать в число, будет возвращен NaN.

console.log(parseFloat('a2.05aa')); // NaN console.log(Number.parseFloat('$1.56')); // NaN console.log(Number.parseFloat('#15.35#')); // NaN console.log(Number.parseFloat(' . 156')); // NaN Но! Пробелы в начале и в конце строки игнорируются.

console.log(Number.parseFloat('1854.359 ')); // 1854.359 console.log(Number.parseFloat(' .156')); // 0.156 console.log(parseFloat(' 2.05aa ')); // 2.05 Подробнее об этом читайте здесь:

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
