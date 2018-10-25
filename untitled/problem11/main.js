function toF() {
var number = document.getElementById("temp").value;
document.getElementById("result").innerHTML = (number  * 1.8) + 32;
}
function toC() {
    var number = document.getElementById("temp").value;
    document.getElementById("result").innerHTML = (5/9) * (number - 32);
}