Конспект

Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.

Синтаксис:

arr.unshift(element1, ..., elementN);
element1, ..., elementN – элементы, добавляемые в начало массива.

Пример1.

let arr = ['one', 'two', 'three', 'four'];
let res = arr.unshift('zero');  // добавляем элемент 'zero' в начало массива
console.log(res);               // 5 (новая длина массива arr)
console.log(arr);               // ["zero", "one", "two", "three", "four"]
Пример 2. Дан массив arr = [10, 20, 30, 40, 50]. Добавить в начало массива числа 1, 2, 3, 4, 5.

1 способ:
let arr = [10, 20, 30, 40, 50];
for (let i = 1; i <= 5; i++){  // цикл от 1 до 5 с шагом 1
  arr.unshift(i);              // добавляем в начало массива сначала 1, потом 2, ..., 5
}
console.log(arr);              // [5, 4, 3, 2, 1, 10, 20, 30, 40, 50] – результат, т.к. числа добавлялись в массив слева
2 способ:
let arr = [10, 20, 30, 40, 50];
for (let i = 5; i >= 1; i--){  // цикл от 5 до 1 с шагом -1
  arr.unshift(i);              // добавляем в начало массива сначала 5, потом 4, ..., 1
}
console.log(arr);             // [1, 2, 3, 4, 5, 10, 20, 30, 40, 50] – результат
