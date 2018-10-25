var today = new Date();
var minute = today.getMinutes();
var hours = today.getHours();
var seconds = today.getSeconds();
var day = today.getDay();
var daylist = ["Sunday ", "Monday ", "Tuesday ", "wednesday ", "Thursday", "Friday", "Saturday"];
console.log("today is: " + daylist[day]);
var pretend;
if (hours> 12){
    pretend = "PM";
}
else{
    pretend = "AM";
}
if (hours === 0 && pretend === ' PM' ){
    if (minute ===0 && seconds ===0){
        hours = 12;
        pretend = "Noon";
}
    else {
        hours = 12;
        pretend = "PM";
    }

}
if (hours === 0 && pretend === ' AM'){
    if (minute ===0 && seconds ===0){
        hours = 0;
        pretend = "Midnight";
    }
    else {
        hours = 0;
        pretend = "AM";
    }
}
console.log("Current time: " + hours  + " " + pretend  + " " + minute + " : " + seconds);
