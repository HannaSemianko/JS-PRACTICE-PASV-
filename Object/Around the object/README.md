Конспект
Чуть ранее мы рассмотрели, как получить свойства объекта, которые находятся на первом уровне. А как быть, если объект более сложный, и он включает массивы или, наоборот, массив включает объекты?

Разберем на примере массива объектов customers.

const customers = [
  {
    id: '00000001',
    personalInfo: {
      name: {
        first: 'Ashley',
        last: 'Fox',
      },
      dob: '12/01/1990',
      contactInfo: {
        phone: '+17008009000',
        email: 'qwe@qwe.com',
        address: {
          zip: '33021',
          city: {
            'city name': 'Golden city',
            street: 'Elm',
          },
        }
      }
    },
    purchases: [{
      order: {
        number: 1,
        date: '12.12.2018',
        item: {
          brand: {
            'brand name': 'aaa',
            code: {
              'unique number': '1b2n3n4m5lk9',
              color: 'red',
              size: [{
                size0: {
                  count: 1
                },
              }, {
                size2: {
                  count: 2
                },
              }],
            }
          }
        }
      }
    }],
  },
  {
    id: '00000002',
    personalInfo: {
      name: {
        first: 'John',
        last: 'Black',
      },
      dob: '10/01/1980',
      contactInfo: {
        phone: '+17778009900',
        email: null,
        address: null,
      }
    },
    purchases: [null],
  }];
Свойства первого уровня – это элементы массива customers.
console.log(customers.length); // 2, массив содержит 2 элемента
console.log(customers[0]); // получим значение первого элемента (объекта)
console.log(customers[1]); // получим значение второго элемента (объекта)
// (проверьте в консоли самостоятельно)
Свойства 2-го уровня – это id, personalInfo, purchases.
Точечная запись:
console.log(customers[0].id); // "00000001"

Скобочная запись:
console.log(customers[0]['id']); // "00000001"
Свойства 3-го уровня – это name, dob, contactInfo, order.
Точечная запись:
console.log(customers[0].personalInfo.name); // значение выведено в виде объекта 
// [object Object] {
//  first: "Ashley",
//  last: "Fox"
// }
console.log(customers[0].personalInfo.dob); // "12/01/1990"

Скобочная запись:
console.log(customers[0]['personalInfo']['dob']); // "12/01/1990"
Свойства 4-го уровня – это first, last, phone, email, address, number, date, item.
Точечная запись:
console.log(customers[0].personalInfo.name.first); // "Ashley"
console.log(customers[0].personalInfo.contactInfo.email); // "qwe@qwe.com"
console.log(customers[0].purchases[0].order.number); // 1, обратите внимание, что purchases – это массив объектов

Скобочная запись:
console.log(customers[0]['personalInfo']['contactInfo']['email']); // "qwe@qwe.com"
console.log(customers[0]['purchases'][0]['order']['number']); // 1
Свойства 5-го уровня – это zip, city, brand.
Точечная запись:
console.log(customers[0].personalInfo.contactInfo.address.zip); // "33021"
console.log(customers[0].personalInfo.contactInfo.address.city); // значение представлено в виде объекта
// [object Object] {
//   city name: "Golden city",
//   street: "Elm"
// }

Скобочная запись:
console.log(customers[0]['personalInfo']['contactInfo']['address']['zip']); // "33021"
Свойства 6-го уровня – это 'city name', street, code, 'brand name'.
Точечная запись:
console.log(customers[0].personalInfo.contactInfo.address.city.street); // "Elm"

Скобочная запись:
console.log(customers[0]['personalInfo']['contactInfo']['address']['city']['city name']); // "Golden city",
// получить значение свойства с именем, состоящим из нескольких слов, возможно только через скобочную запись
console.log(customers[0]['purchases'][0]['order']['item']['brand']['brand name']); // "aaa"
Свойства 7-го уровня – это color, size, 'unique number'.
Точечная запись:
console.log(customers[0].purchases[0].order.item.brand.code.color); // "red"

Скобочная запись:
console.log(customers[0]['purchases'][0]['order']['item']['brand']['code']['color']); // "red"
console.log(customers[0]['purchases'][0]['order']['item']['brand']['code']['unique number']); // "1b2n3n4m5lk9"
Свойства 8-го уровня – это size0, size2.
Точечная запись:
console.log(customers[0].purchases[0].order.item.brand.code.size[1].size2); // обратите внимание, что size является массивом объектов
// [object Object] {
//   count: 2
// }

Скобочная запись:
console.log(customers[0]['purchases'][0]['order']['item']['brand']['code']['size'][1]['size2']);
// [object Object] {
//   count: 2
// }
Свойства 9-го уровня – это count.
Точечная запись:
console.log(customers[0].purchases[0].order.item.brand.code.size[0].size0.count); // 1
console.log(customers[0].purchases[0].order.item.brand.code.size[1].size2.count); // 2

Скобочная запись:
console.log(customers[0]['purchases'][0]['order']['item']['brand']['code']['size'][0]['size0']['count']); // 1
console.log(customers[0]['purchases'][0]['order']['item']['brand']['code']['size'][1]['size2']['count']); // 2
Многоуровневые массивы и ассоциативные массивы (объекты) встречаются очень часто, и надо уметь правильно строить путь к нужному свойству. Если вы точно знаете имена свойств и они простые, используйте запись через точку (в таком случае код выглядит не слишком громоздким), иначе – только скобочная запись.

Потренируйтесь самостоятельно путешествовать по массиву объектов, размещенному выше, и выводить получаемые значения в консоль разными способами.

