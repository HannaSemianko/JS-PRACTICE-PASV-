Метод substring() возвращает подстроку между двумя индексами.

Синтаксис: string.substring(index1[, index2]),

где index1 – это позиция, с которой будет начинаться значение возвращаемой подстроки, index2 – это позиция, до которой будет выбрано значение подстроки. Значение самого индекса index2 не будет включено.

let str = 'Thanksgiving'; console.log(str.substring(0, 6)); // "Thanks" Если index2 не указан, то значение будет возвращено от index1 до конца строки.

console.log(str.substring(0)); // "Thanksgiving" Если какой-либо из индексов меньше нуля, то его значение будет считаться равным 0. А если больше, чем длина строки, – равным её длине.

console.log(str.substring(-1, 2)); // "Th" console.log(str.substring(0, 30)); // "Thanksgiving" Если первый индекс больше, чем второй (index1 > index2), то метод сработает так, как будто они поменялись местами (string.substring(index2, index1)).

console.log(str.substring(6, 0)); // "Thanks", тоже самое, как str.substring(0, 6) Если первый индекс равен второму, будет возвращена пустая строка ('').

console.log(str.substring(4, 4)); // "" Очень удобно использовать длину строки в данном методе, если нам необходимо получить определенное количество символов от конца строки. Нет необходимости знать точные значения индексов.

console.log(str.substring(str.length - 3)); // "ing", возвращены 3 последние символа строки console.log(str.substring(str.length - 5)); // "iving", возвращены 5 последних символов строки Подробнее читайте здесь:

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substring

Метод slice() извлекает подстроку между индексами и возвращает ее значение.

Синтаксис: str.slice(index1[, index2]),

где index1 – это индекс, с которого будет начинаться значение возвращаемой подстроки, index2 – это индекс, до которого будет выбрано значение подстроки. Значение самого индекса index2 не будет включено. Если index1 отрицательный, то его значение трактуется как str.length + index1. Если index2 отрицательный, то его значение трактуется как str.length + index2, где str.length - это длина строки.

let str = 'destination'; console.log(str.slice(0, 5)); // "desti", значение индекса 5 "n" в возвращаемую подстроку не включается console.log(str.slice(2, 4)); // "st" console.log(str.slice(2, 2)); // "", возвращена пустая строка index2 является необязательным параметром, и если он не указан, то значение будет возвращено от первого индекса index1 до конца строки.

console.log(str.slice(5)); // "nation" console.log(str.slice(-6)); // "nation" Данный метод очень схож с методом substring(), но различия все же есть. Индексы в данном методе могут быть отрицательными числами. Это означает, что позиция определена, как заданное количество символов с конца строки.

console.log(str.slice(-3)); // "ion" console.log(str.slice(-3, -1)); // "io", значение второго индекса не включается Если первый индекс больше, чем второй (при отрицательных индексах после их пересчета по формуле str.length + index), будет возвращена пустая строка.

console.log(str.slice(2, 1)); // "" console.log(str.slice(-1, -3)); // "", возвращена пустая строка Подробнее о методе читайте здесь:

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice