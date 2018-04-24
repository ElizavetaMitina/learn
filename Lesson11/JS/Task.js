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
console.log('Today is: '+arr[now.getDay()]+', '+now.getHours()+':'+now.getMinutes());
console.log('Today is: '+now.getDate()+'.0'+(now.getMonth()+1)+'.'+now.getFullYear());

