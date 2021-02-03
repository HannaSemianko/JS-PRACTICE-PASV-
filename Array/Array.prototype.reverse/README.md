Расположить элементы массива в обратном порядке (без использования метода reverse)

Конспект

Для того, чтобы перевернуть массив элементов на месте без использования метода reverse() или создания нового массива, разберем следующий пример.

const arr = [1, 2, 3, 4, 5, 6]; for (let i = 0; i < arr.length / 2; i++) { let temp = arr[i]; arr[i] = arr[arr.length - 1 - i]; arr[arr.length - 1 - i] = temp; } console.log(arr); // [6, 5, 4, 3, 2, 1] Для того, чтобы идти по элементам массива создаем цикл for(){}. Обратите внимание, что идем только до середины массива (при этом сама середина не включена). Вводим дополнительную переменную temp, которая видна только внутри цикла и ее значение задается при каждой итерации.

1-й круг, i = 0:

Присваиваем переменной temp значение элемента arr[i], а на каждой итерации это следующий элемент массива. Это действие необходимо, чтобы в итоге мы могли присвоить значение этого элемента элементу, с которым производим замену. let temp = arr[0]; // temp = 1, Теперь мы можем присвоить arr[i] значение элемента массива, с которым необходимо произвести замену: arr[i] = arr[arr.length - 1 - i]; Почему от последнего индекса массива мы отнимаем i? Если этого не сделать, то все последующие элементы мы будем менять местами только с этим последним элементом массива. В итоге наш массив выглядел бы так: [6, 1, 2, 4, 5, 3]. (Самостоятельно проверьте в консоли вариант без i.)

arr[0] = arr[5]; // теперь arr[0] = 6 Остался последний шаг: присвоить последнему элементу массива значение первого из переменной temp. arr[5] = temp; // т.е. arr[5] = arr[0] = 1 Что мы имеем после первого круга цикла:

arr = [6, 2, 3, 4, 5, 1]; Последующие итерации будут повторять шаги 1-3.

2-й круг (i = 1):

arr = [6, 5, 3, 4, 2, 1]; 3-й круг (i = 2):

arr = [6, 5, 4, 3, 2, 1]; 4-ой итерации не будет, т.к. i = 3 и не соблюдается условие i < arr.length / 2.

Если бы мы не задали условие i < arr.length / 2, наш массив после завершения всего цикла остался бы прежним (см. пример ниже), так как успел бы поменять элементы местами 2 раза. console.log(arr) внутри цикла for(){} для наглядности того, как происходит перестановка элементов массива на каждой итерации. Используйте любую песочницу и проверьте выводимые в консоль значения.

const arr = [1, 2, 3, 4, 5, 6]; for (let i = 0; i < arr.length; i++) { let temp = arr[i]; arr[i] = arr[arr.length - 1 - i]; arr[arr.length - 1 - i] = temp; console.log(arr); } console.log(arr); // [1, 2, 3, 4, 5, 6]