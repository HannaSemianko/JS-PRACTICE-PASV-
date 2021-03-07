Конспект
При написании программ часто встаёт задача сделать однотипное действие много раз. Для многократного повторения одного участка кода предусмотрены циклы.

Цикл – это последовательность команд, которая выполняется до тех пор, пока выполняется некоторое условие. Последовательность действий, повторяющаяся в процессе выполнения цикла, называется телом цикла.
В языке JavaScript существует несколько видов циклов. Рассмотрим первый из них –цикл c предварительным условием while.

Синтаксис:

while (условие) {
  // код (тело цикла)
}
Выполнение цикла:

Сначала проверяется условие;
Если условие истинно, то выполняется тело цикла, и снова осуществляется переход к проверке условия;
Если условие ложно, то выполнение цикла заканчивается.
while

Таким образом, команды цикла выполняются многократно до тех пор, пока условие истинно. Если условие ложно с самого начала, то тело цикла не будет выполнено ни разу. Если условие истинно всегда, то тело цикла будет выполняться бесконечно (получаем бесконечный цикл, или "зацикливание").

Пример. Рассмотрим цикл, который выводит в консоль числа от 1 до 10.

let i = 1;                // задаем начальное значение переменной i
while (i <= 10) {         // задаем условие, при выполнении которого должен выполняться цикл
  console.log( i );      // выполняется действие цикла – вывод в консоль значения переменной i
  i++;                   // увеличиваем значение переменной i на 1 для перехода к следующей итерации цикла
}
Каждое повторение тела цикла – итерация. В примере выше цикл совершит десять итераций. Если бы мы не изменяли значение i (i++), то цикл выполнялся бы бесконечно.

Пример бесконечного цикла:

let i = 10;
while (i > 0) {           // цикл бесконечный, т.к. условие всегда истинно
  i++;
}
Пример цикла, который не выполнится ни разу:

let i = 20;
while (i <= 10) {    // цикл не выполнится ни разу, т.к. условие с самого начала ложно
  console.log( i );
  i--;
}