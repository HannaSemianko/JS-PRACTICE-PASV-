Array.prototype.concat-
Метод concat() объединяет исходный массив с другим массивом/значениями, переданными в качестве аргумента. Порядок элементов при объединении не изменяется.

Возвращает новый объединенный массив. Исходный массив остается неизменным.

Синтаксис: const newArray = array.concat(value1[, value2[, ...[, valueN]]]);

const arr = [1, 2]; const arr2 = [3, 4]; const res = arr.concat(arr2); // res = [1, 2, 3, 4], // arr объединяем с arr2 и получаем новый массив res

const res2 = arr.concat('a', 'b'); // res2 = [1, 2, "a", "b"], // arr объединяем со списком значений и получаем новый массив res2

const res3 = arr.concat('cat', ['f'], arr2); // res3 = [1, 2, "cat", "f", 3, 4], // можно одновременно объединять и массив, и значения, // обратите внимание, что порядок элементов не меняется Если в метод concat() не передавать никаких аргументов, то будет возвращена поверхностная копия исходного массива:

const res4 = arr.concat(); // res4 = [1, 2]

This lesson we learn two methods of array: concat() and join(). We have seen concat() in the stringObject method, but the method of the arrayObject is different from the stringObject method, so we need to learn again. When studying the stringObject method split(), we have simply learned the join() method. This time we will review and explain it in detail.

Their definitions and syntax please refer to:

Array.prototype.concat() Array.prototype.join() (Please forgive me for my laziness;-)

Here are some examples to help us understand the use of concat() and join():

We first learn the concat() method, which can add some elements to the end of the array. concat() can have more and more parameters, and the parameter can be values, array or otherthings. Look this example:

var arr1=[1,2,3],arr2=[4,5,6]; //The following ways can achieve the same purpose: //It can use an array as parameter console.log(arr1.concat(arr2)); //also can use some values as parameters console.log(arr1.concat(4,5,6)); //also can use more than one array as parameters console.log(arr1.concat([4],[5],[6])); //use ... accept the value of an enumeration console.log(arr1.concat(...arr2)); //It can be used continuously console.log(arr1.concat(4).concat(5).concat(6)); //output: [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ] concat() can be used for the flat output of two-dimensional or multidimensional arrays. look this example:

var arr=[[1,2],[3,4],[5,6]]; var result=[]; for (var i=0;i<arr.length;i++) result=result.concat(arr[i]); console.log(result); //output: [ 1, 2, 3, 4, 5, 6 ] This example by traversing the array and concat() method to get a one-dimensional array, which contains all the elements of the two-dimensional array. Or use more simple code:

var arr=[[1,2],[3,4],[5,6]]; var result=[].concat(...arr); console.log(result); //output: [ 1, 2, 3, 4, 5, 6 ] ...arr takes all the elements of arr (some one-dimensional array) as parameters of concat().

Here we look at some examples of join(). Its main purpose is to merge the elements of an array into a string, using a parameter separator to connect each element. If the separator is omitted, the default separator is ",":

var arr=[1,2,3,4,5]; console.log(arr.join()); //output: 1,2,3,4,5 console.log(arr.join(",")); //output: 1,2,3,4,5 console.log(arr.join(" ")); //output: 1 2 3 4 5 console.log(arr.join("and")); //output: 1and2and3and4and5 One of its classic applications is to produce a specified number of repeating characters:

function repeat(s,n){ return [...Array(n+1)].join(s); } console.log(repeat("a",5)); //output: aaaaa console.log(repeat("abc",5)); //output: abcabcabcabcabc It is also a good choice to connect multiple strings. When there is a large number of strings that need to be connected to a string, the use of the + operator speed is slow, the correct method should be to put them into the array, and then use the join() method:

//use + operator: var result=""; for (var i=0;i<26;i++) result+=String.fromCharCode(97+i); console.log(result) //output: abcdefghijklmnopqrstuvwxyz //use join() method: var cache=[]; for (var i=0;i<26;i++) cache[i]=String.fromCharCode(97+i); var result=cache.join(""); console.log(result) //output: abcdefghijklmnopqrstuvwxyz
