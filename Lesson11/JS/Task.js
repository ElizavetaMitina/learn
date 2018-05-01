//1
var now = new Date();
var arr={
    0:'Sunday',
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday'
};
console.log('Today is: '+ arr[now.getDay()]+', '+now.getHours()+':'+now.getMinutes());
//2
console.log('Today is: ' + now.getDate() + '.0' + (now.getMonth() + 1) + '.' + now.getFullYear());
//3
var arr2={
    0:'January',
    1:'February',
    2:'March',
    3:'April',
    4:'May',
    5:'June',
    6:'July',
    7:'August',
    8:'September',
    9:'October',
    10:'November',
    11:'December'
};
for (var y = 2014; y <= 2050; y++){
            var date = new Date(y, 0, 1);
            if ((date.getDay() === 0)){
                console.log('This day is: ' + date.getDate() + ' ' + arr2[date.getMonth()]  + ' ' +  date.getFullYear() + ', ' + arr[date.getDay()]);
                break;
            }
}
//4
var ny = new Date(2019, 0, 1);
console.log((Math.round((ny-now)/86400000)) + ' days before the New Year');
//5
function is_array(mass) {
    return Array.isArray(mass);
}
console.log(is_array('qwe'));
console.log(is_array([1, 2, 4, 0]));
//6
numbers = [5, 4, 3, 2, 1];
function clone(mass) {
    var mass2 = [];
    for (i = 0; i < mass.length; i++){
        mass2[i] = mass[i];
    }
    return mass2;
}
console.log(clone(numbers));
//7
arr4 = [2, 3, 4, 4, 4, 5, 1, 6, 1];
var count = [0,0,0,0,0,0,0,0,0];
function freq(mass) {
    for (i = 0; i < mass.length; i++){
        for (j = 0; j < mass.length; j++){
        if (mass[j] === mass[i]) {
            count[i] = count[i] + 1;
            }
        }
    }
        var max = 0;
        for (m = 0; m < count.length; m++){
            if (count[m] > count[max]){
                max = m;
            }
        }
    return max;
}
console.log('Наиболее часто встрчаемый элемент - ' + arr4[freq(arr4)]);
//8
var str = 'ЗдравствУй, ДороГой ДруГ';
function Case(str) {
    stw = str.toUpperCase();
    return stw;
}
console.log(Case(str));
//9
var str_arr = ["pen", "apple", "umbrella", "apple"];
function duplicate(mass) {
    for (i = 0; i < mass.length; i++){
        for (j = i+1; j < mass.length; j++) {
            if (mass[j] === mass[i]) {
                mass.splice (i,1);
            }
        }
    }
    return mass;
}
console.log(duplicate(str_arr));
//10
arr5 = [1, 2, 3, 4, 5];
function shuffle (mass){
    for (i = mass.length - 1; i > 0; i--){
        var m = Math.floor(Math.random()*(i+1));
        var el = mass[m];
        mass[m] = mass [i];
        mass [i] = el;
        }
    return mass;
}
console.log(shuffle(arr5));
//11
arr6 = ['0', 'keck', 'iloveyou', 'NaN'];
function sort(mass){
    for (i = 0; i < mass.length; i++){
        switch(mass[i]){
            case '0':
            case "":
            case 'NaN':
            case 'false':
            mass.splice (i,1);
        }
    }
    return mass;
}
console.log(sort(arr6));
//12
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
function compareFunction(a, b) {
    if (a.title>b.title) return 1;
    if (a.title>b.title) return -1;
}
library.sort(compareFunction);
console.log(library);
//13
arr7 = [1, 1, 2, 3];
arr8 = [4, 5, 6, 6, 7];
Newarr = arr7.concat(arr8);
console.log(duplicate(Newarr));
//14
arr9 = ['yes', 'I', 'do not', 'love', 'you'];
function remove(mass, str) {
    var number = mass.indexOf(str);
    mass.splice(number, 1);
    return mass;
}
console.log(remove(arr9, 'do not'));
//15
function random(mass) {
    var m = Math.floor(Math.random()*mass.length);
    return mass[m];
}
console.log(random(Newarr));
//16
function move(mass, number) {
    var m = Math.floor(Math.random()*mass.length);
    var num = mass[number];
    mass[number] = mass[m];
    mass[m] = num;
    return mass;
}
console.log(move(Newarr, 2));
//17
var date2 = new Date(2018, 7, 21);
function diff(date1, date2) {
    return (Math.round((date2-date1)/86400000));
}
console.log(diff(now, date2));
//18
function maxDate(mass) {
    var max = 0;
    for (m = 0; m < mass.length; m++){
        mass [m] = new Date(mass[m]);
        if (mass[m] > mass[max]){
            max = m;
        }
    }
    return max;
}
console.log(['2015/02/01', '2015/02/02', '2015/01/03'][maxDate(['2015/02/01', '2015/02/02', '2015/01/03'])]);
//19
str2 = 'When chebureck is ready I am happy';
function split(str) {
    str = str.split(' ');
    return str;
}
console.log(split(str2));
//20
str3 = 'sasha loves me';
function capitalize(str) {
    var mass = str.split('');
    mass[0] = mass[0].toUpperCase();
    str = mass.join('');
    return str;
}
console.log(capitalize(str3));
//21
function camelize(str) {
    var mass = str.split(' ');
    for (i = 0; i < mass.length; i++){
        if (mass[i] === '-'){
            mass.splice(i, 1);
        }
    }
    str = mass.join('');
    return str;
}
console.log(camelize("Java Script"));
console.log(camelize("java-script"));
console.log(camelize("Java Script Exercises"));
//22
arr11 = [1, 3, 10, 13, 4, 2];
function highest(mass) {
    var max = 0;
    for (i = 0; i < mass.length; i++){
        if (mass[i] > mass[max]){
            max = i;
        }
    }
    return max;
}
console.log('Наибольший элемент массива (' + arr11 + ') - ' + arr11[highest(arr11)]);
//23
function lowest(mass) {
    var min = 0;
    for (i = 0; i < mass.length; i++){
        if (mass[i] < mass[min]){
            min = i;
        }
    }
    return min;
}
console.log('Наименьший элемент массива (' + arr11 + ') - ' + arr11[lowest(arr11)]);
//24
first = 1;
second = '2';
third = 'three';
function num(x) {
    return (typeof x === 'number')
}
console.log(num(first));
console.log(num(second));
console.log(num(third));
//25
function sum(mass) {
    var sum = 0;
    for (i = 0; i < mass.length; i++){
        sum = sum + mass[i];
    }
    return sum;
}
console.log('Сумма массива ('  + arr11 + ') - ' + sum(arr11));
//26
obj = {
    name: 'Liza',
    age: 19,
    sex: 'very gooooood'
};
function length(object) {
    var size = 0,
    key;
    for (key in object){
        if (key in object) size++;
    }
    return size;
}
console.log(length(obj));
//27
function list(object) {
    for (var key in object){
        console.log(key + ': ' + object[key]);
    }
}
list(obj);