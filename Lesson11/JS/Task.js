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
var ny = new Date(2019, 0, 1);
//4
console.log((Math.round((ny-now)/86400000)) + ' days before the New Year');
//5
function  is_array(text){
var arr3 = text;
    if (arr3.length > 1){
        return true;
    }
    else {
        return false;
    }
}
var qwe = {0:'q', 1:'w', 2:'e'};
    console.log(is_array(qwe));
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