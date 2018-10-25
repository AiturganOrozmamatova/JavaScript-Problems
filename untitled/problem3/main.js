var today = new Date();
var day = today.getDate();
var month =today.getMonth() + 1;
var year = today.getFullYear();
if (day < 10){
    day =  "0" + day;
}
if (month < 10){
    month = "0" + month;
}
today = day + " - " + month + " - " + year;
console.log(today);