var today = new Date();
var cristmas = new Date (today.getFullYear(), 11, 25);
if (today.getMonth() ===12 && today.getDay()> 25){
    cristmas.setFullYear(cristmas.getFullYear() + 1);
}
var time  = 1000 * 60 * 60 * 24;
console.log (Math.ceil((cristmas.getTime() - today.getTime()) / time ));