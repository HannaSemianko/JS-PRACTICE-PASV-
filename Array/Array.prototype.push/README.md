Метод push() добавляет один или более элементов в конец массива arr и возвращает новую длину массива.

Синтаксис:

arr.push(element1, ..., elementN)
Здесь element1, ..., elementN – один или несколько элементов, добавляемых в конец массива.

const arr = [];          // задан пустой массив
console.log(arr.length); // 0 – длина пустого массива
let m = arr.push(10);    // добавляем число 10 в конец массива
console.log(m);          // 1 (новая длина массива после того, как в него добавлен элемент 10)
console.log(arr);        // [10] 
Пример. Найдите сумму и произведение элементов массива arr и результат верните в виде массива [sum, prod].

const arr = [1, 2, 3, 4, 5];  
let sum = 0;         // начальное значение суммы
let prod = 1;        // начальное значение произведения
const res = [];      // пустой массив для результата
for (let i =0; i < arr.length; i++){
  sum += arr[i];     // нахождение суммы элементов массива
  prod *= arr[i];    // нахождение произведения элементов массива
}
res.push(sum, prod);  // добавление значений суммы и произведения в массив res
console.log(res);     // [15, 120]