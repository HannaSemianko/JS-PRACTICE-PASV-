Конспект
Метод shift() удаляет первый элемент из массива и возвращает его значение.

Синтаксис:

arr.shift();
Метод shift() удаляет элемент c индексом 0, сдвигает значения по последовательным индексам вниз, а затем возвращает значение удаленного элемента. Если массив был пустой, т.е. его длина была равна 0, вернётся значение undefined.

Пример 1. Посмотрите, как работает метод shift():

const arr = ['pizza', 'cheese', 'salad', 'potato', 'celery'];
console.log(arr.length);    // 5
let del = arr.shift();
console.log(del);           // "pizza" (удаленный элемент)
console.log(arr);           // ["cheese", "salad", "potato", "celery"]
console.log(arr.length);    // 4
Пример 2. Дан массив. Удалить три первых элемента массива.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 3; i++){ // цикл выполняется 3 раза 
  arr.shift();               // удаляется первый элемент (сначала 1, потом 2, потом 3)
}
console.log(arr);            // [4, 5, 6, 7, 8, 9, 10]
Пример 3. Дан массив, в котором в начале находится некоторое количество отрицательных чисел, затем есть хотя бы одно положительное число. Удалить все отрицательные числа в начале массива, находящиеся до первого положительного элемента.

const arr = [-11, -2, -33, -4, -125, 6, 7, 8, 9, 10];
while (arr[0] < 0){  // пока первый элемент массива отрицательный,
  arr.shift();       // удаляется элемент в начале массива
}
console.log(arr);    // [6, 7, 8, 9, 10] – новый массив
Пример 4. Дан массив, в котором в начале находится некоторое количество строковых элементов, после которых могут находиться числа. Удалить все строковые элементы в начале массива, находящиеся до первого числа.

const arr = ["a", "b", "c",  9, 10];
let countNotNums = 0;
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === "string") {  //считаем количество нечисловых элементов в начале массива
      countNotNums ++;
    } else break;
  }
  for (let i = 0; i < countNotNums; i++){  //удаляем нечисловые элементы в начале массива
    arr.shift();
  }
