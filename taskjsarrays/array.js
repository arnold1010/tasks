var vasya = {
    name: "Вася",
    age: 23
};
var masha = {
    name: "Маша",
    age: 18
};
var vovochka = {
    name: "Вовочка",
    age: 6
};

let people = [vasya, masha, vovochka];

people.sort((a, b) => a.age - b.age);
console.log(people);




var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var classNames = obj.className.split(" ");
    var index = classNames.indexOf(cls);
    if (index === -1) {
        classNames.push(cls)
    };
    obj.className = classNames.join(' ');
    // obj.className = classNames;
};

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log(obj.className);

Задача №2

var characters = [
    { name: 'Михаил', age: 36 },
    { name: 'Фёдор', age: 40 }
];
let key='age';

function pluck (characters, key) {
    return characters.map(item => item[key]);
}

console.log(pluck(characters, key)); // ['Михаил', 'Фёдор']

