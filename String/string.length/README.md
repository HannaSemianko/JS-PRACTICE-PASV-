В этом уроке мы будем решать задачи, требующие знания, как получить длину строки или обратиться к определенному элементу строки по индексу.

Конспект
У строк есть свойство "длина", обозначается length:

let str = 'Good job!';
console.log(str.length); // 9
Длина пустой строки равна 0.

Нумерация символов в строке начинается с 0. Чтобы обратиться к отдельному символу внутри строки, можно использовать 2 способа:

обращение по индексу str[position] (используется чаще всего),
метод charAt(position).
let str = 'Great idea';
console.log(str[0]); // "G"
console.log(str.charAt(0)); // "G"
Обратиться к последнему символу строки можно используя ее длину:

let str = 'Zero';
console.log(str[str.length - 1]); // "o"
Если попытаться получить символ с позицией большей, чем str.length - 1, то str[position] вернёт undefined, а метод charAt(position) – пустую строку.

У каждого символа в JavaScript есть свой код. Есть специальные методы, чтобы получить символ по его коду и наоборот: str.codePointAt(position)] и String.fromCodePoint(code). Например:

console.log("a".codePointAt(0) ); // 97
console.log(String.fromCodePoint(97)); // "a"
Подробнее читайте здесь:

https://learn.javascript.ru/types

https://learn.javascript.ru/string

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
