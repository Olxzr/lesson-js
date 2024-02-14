// // ПЕРВОЕ ЗАДАНИЕ

// // создал переменную 
// let age = 200;

// // переименовал переменную
// age = 1997;

// // console.log(age);

// let Name = prompt('Студент');

// let address = prompt('Адрес');

// let phone = prompt('Телефон');

// console.log('Студент' + ' ' + Name + '\n' + 'Адрес' + ' ' + address  + '\n' + 'Телефон' + ' ' + phone );




// Первое ЗАДАНИЕ

function asa(o, m){
    return o + m;
}
let res = asa(1,2)
console.log(res)
asa(1, 2)


function addition(){
    let a = 5;
    let c = 10 + a;
    console.log(c);
}
addition()

// // Второе ЗАДАНИЕ

function asaf(o, m){
    return o * m;
}
let resg = asaf(10,2)
console.log(resg)
asa(10, 2)


function multiplication(){
    let a = 5;
    let c = 10 * a;
    console.log(c);
}
multiplication()

// // Третье ЗАДАНИЕ

// function CheckingForPositivity(ten){
//     if(ten >= 18) 
//         alert('достут полчен')
//     else alert('доступ закрыт')
// }
// CheckingForPositivity(17)

// Второй способ третьего задания

let two = 10;
if(two > 15)
{ console.log('Переменная больше 15') }
else(two < 15)
    console.log("Переменная меньше 15")


// четвертое ЗАДАНИЕ

let fifteen = 15;

let seven = 7;

let result = fifteen + seven;

console.log(result)

// пятое ЗАДАНИЕ

let a = true;

let b = false;

let c = a > b;

let d = a < b;

let i = a == b;

let f = a != b;

console.log(a, b, c, i, f);

// шестое ЗАДАНИЕ

function AgeVerification(age){
    if(age >= 18) 
        console.log('Подросток или взрослый')
    else console.log('ребенок')
}
AgeVerification(18)


// седьмое ЗАДАНИЕ

function square(five, three) {
    let grg = five ** three;
    console.log(grg)
}
square(5, 3)

// восьмое ЗАДАНИЕ

let emptiness = 0

emptiness+= 5

emptiness*= 5

emptiness-= 5

emptiness/= 2


console.log(emptiness)

// девятое ЗАДАНИЕ

let text = 'Шурик';

let string = 'Галустян';

let comparison = text !== string;

console.log(comparison)


// дусятое ЗАДАНИЕ

function sum(nam) {

    let as = 0

    for(let i = 0; i < nam.length; i++)

    as += nam[i]

    console.log(as)
};

sum([1, 2, 3])




// одинадцатое ЗАДАНИЕ

let isAdult = false;

let age = 20;

age >= 18 ? console.log('возраст подходит', isAdult = true) : console.log('возраст не подходит', isAdult = false)




// Условные операторы и циклы в JavaScript:
// первое ЗАДАНИЕ 


let vozrast = prompt('вам должно быть не менее 18 лет что бы пройти тест')

let agep = 18;

// let rea = (vozrast >= agep) ? console.log('вы прошли') : console.log("вы не прошли")

if(vozrast >= agep)
console.log('вы прошли')

else console.log("вы не прошли")


// второе ЗАДАНИЕ 


let prom = prompt('Строка пустая?')

if(prom === '')

console.log('строка пустая')

else console.log("строка не пустая")

// Функции и их использование в JavaScript:
// задание ПЕРВОЕ

function sum(a, b) {

    console.log(a + b)
};

    sum(1, 2)

// задание ВТОРОЕ

function suma(v) {

    console.log(v.length)
};

suma('Adlan')

























// let login = 'Adlan1';

// let password = 'waw';

// let getlogin = prompt('Ведите Логин')

// let rugust = (getlogin === login) ? console.log('Успешно') : console.log('не верно!')



// console.log(rugust);
