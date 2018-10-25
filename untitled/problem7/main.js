
for (year = 2014; year <= 2050; year ++){
    var day = new Date (year, 0, 1);
    // noinspection JSAnnotator
    if (day.getDay() === 0){
        console.log ("1st January is being a Sunday  "+year);
    }
}
