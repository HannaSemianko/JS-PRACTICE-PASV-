Конспект
Высказывание, которое состоит из двух утверждений А и В, соединенных логической операцией И (&&) , считается истинным только тогда, когда оба утверждения А и В истинны, и ложным, если хотя бы одно из них ложно.

&& &&

Оператор И (&&) работает следующим образом: если хотя бы один из аргументов false, то возвращает false; если все аргументы true, возвращается true.

Если логический оператор ИЛИ (||) "ищет" первое истинное утверждение (true) в ряду, то логический оператор И (&&), наоборот, работает до тех пор, пока не встретит первое ложное утверждение (false).

Логические значения оператора И (&&) можно описать с помощью следующей таблицы:

console.log( true && true ); // true
console.log( false && true ); // false
console.log( true && false ); // false
console.log( false && false ); // false
Пример 1. Высказывание "Число 125 - трехзначное (высказывание А) и число 125 кратно 5 (высказывание B)" является истинным, так как истинны оба высказывания А и В.

Пример 2. Высказывание "Число 2 является четным (высказывание А) и отрицательным числом (высказывание В)" является ложным, так как высказывание А истинно, а высказывание В ложно. Пример:

let a = 125;
console.log( a >= 100 && a <= 999 && a % 5 === 0); // true, т.к. все условия истинны (true)
let b = 2;
console.log (b % 2 === 0 && b < 0); // false, т.к. второе условие ложно (false)
Пример 3. Дан номер месяца. Определить, является ли данный месяц весенним месяцем.

if (month >= 3 && month <= 5) console.log('spring');
