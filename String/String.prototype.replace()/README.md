Конспект
Метод replace() позволяет найти и заменить какой-либо символ/символы в строке на заменитель.

Возвращаемое значение – новая строка с замененными на заменитель символом/символами. Исходная строка, к которой был применен метод, остается неизменной.

Синтаксис: string.replace(str1|regexp, str2|func),

где str1 – искомая подстрока, которую необходимо заменить на str2 или применить func (замена будет произведена только один раз!),

regexp – объект регулярного выражения RegExp, который будет заменен на str2 (или к нему будет применена func). Если использовать соответствующие флаги регулярного выражения, то будут заменены все символы, подходящие этому regexp,

str2 – заменитель (строка, заменяющая подстроку str1 или regexp),

func – функция, вызываемая для создания новой подстроки взамен str1/regexp.

Применение метода replace() без регулярного выражения
Задание 1. Дана строка str. Необходимо вернуть новую строку, в которой первый найденный символ 'a' будет заменен на 'A'.

let str = 'anabell';
let str2 = str.replace('a', 'A');
console.log(str2); // "Anabell", обратите внимание, что если str1 – это строка, 
// то замена на str2 производится только 1 раз. 
// Второй символ 'a' не изменился в нашем примере.
Задание 2. Дана строка str. Необходимо заменить первый символ 'l' на 'lBELL' и вернуть новую строку.

let str = 'bell';
function replacer(s){
  return s + 'BELL';
}
let str2 = str.replace('l', replacer);
console.log(str2); // "belBELLl", в данном примере функция применена к подстроке str1 только один раз
Применение метода replace() с использованием регулярных выражений
Регулярное выражение состоит из шаблона и флагов (флаги не являются обязательными).

Наиболее распространенный синтаксис для регулярных выражений:

regexp = /pattern/flags;,

где pattern – это шаблон для поиска и замены, а flags – это флаги. Флаг g означает глобально, т.е. будут заменены все шаблоны, найденные в строке. Флаг i означает игнорирование регистра символов в строке.

Рассмотрим на примерах, какое значение будет возвращено методом, если мы будем использовать регулярные выражения с флагами и без.

Задание 3. Дана строка str. Заменить первый найденный символ в строке, который содержит цифру от 0 до 9, на символ '*'.

let str = 'password: Aa12345bB';
let str2 = str.replace(/[0-9]/, '*');
console.log(str2); // "password: Aa*2345bB", 
// /[0-9]/ – это regexp, который означает все цифры от 0 до 9 включительно, 
// аналогично для всех букв английского алфавита: /[a-z]/, /[A-Z]/,
// обратите внимание: внутри квадратных скобок не используем пробелы
Задание 4. Дана строка str. Заменить все символы в строке, которые содержат цифры от 0 до 9, на символ '*'.

let str = 'password: Aa12345bB';
let str2 = str.replace(/[0-9]/g, '*'); 
console.log(str2); // "password: Aa*****bB",
// добавление флага g позволило заменить все цифры в строке на '*'
Задание 5. Дана строка str. Необходимо заменить все буквы английского алфавита на нижнее подчеркивание '_'.

let str = 'password: ACad098bHmiz';
let str2 = str.replace(/[a-z]/gi, '_');
console.log(str2); // "________: ____098_____",
// используем сразу два флага gi, что позволяет заменить все буквы алфавита в строке, независимо от их регистра 
Задание 6. Дана строка str. Заменить все символы строки, которые содержат цифры от 0 до 9 включительно, умножив их значение на 10.

let str = '2 + 3 = 5';
function replacer(s){
  return s * 10;
}
let str2 = str.replace(/[0-9]/g, replacer);
console.log(str2); // "20 + 30 = 50",
// функция replacer вызвана три раза на символах '2', '3' и '5', потому что мы использовали флаг g. 
// В противном случае, произошла бы замена только первого символа '2'
Полезно знать! В регулярных выражениях есть такие понятия, как символьный класс и квантификатор.

Символьный класс – специальное обозначение, которое соответствует любому символу из определённого набора (например, цифры):

\d – все цифры от 0 до 9.

\D – не цифры.

\s – пробельные символы, символ табуляции, новые строки (\n).

\S – все, кроме \s.

\w – латиница (буквы русского алфавита не подходят), цифры, подчёркивание '_'.

\W – все, кроме \w.

/./ – любой символ кроме перевода строки \n.

Квантификатор – количество раз, которое встречается символ в строке подряд:

+ – означает «один или более» (например: /\d+/).

* – означает «ноль или более» (например: /\d*/).

Подробнее читайте здесь:

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace

https://learn.javascript.ru/regexp-introduction

https://learn.javascript.ru/regexp-quantifiers

https://learn.javascript.ru/regexp-character-classes

