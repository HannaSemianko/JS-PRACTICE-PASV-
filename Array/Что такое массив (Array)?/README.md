Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов. В массиве могут храниться элементы любого типа. Существует два способа создать пустой массив:

let array = new Array(); // очень редко
let array = []; 
Почти всегда используется 2-й вариант. В скобках мы можем указать начальные значения элементов.

Пример:

let array = [0, 10, 20, 30];
Общее число элементов массива содержится в его свойстве length:

console.log(array.length); // 4
Свойство length автоматически обновляется при изменении массива.

Элементы массива нумеруются с нуля: первый элемент массива имеет индекс, равный 0, а индекс последнего элемента равен значению свойства массива length минус 1.

Мы можем получить элемент, указав его номер в квадратных скобках:

console.log(array[3]); // 30
Замена элемента массива:

array[3] = 100;
console.log(array[3]); // 100
Добавить элемент в конец массива:

array[4] = 5;
console.log(array);         // [0, 10, 20, 100, 5] 
console.log(array.length); // 5, длина массива изменилась автоматически
