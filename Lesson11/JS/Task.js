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
console.log('Today is: ' + now.getDate() + '.0' + (now.getMonth() + 1) + '.' + now.getFullYear());
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
console.log((Math.round((ny-now)/86400000)) + ' days before the New Year');