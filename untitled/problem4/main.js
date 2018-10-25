var a = 5;
var b = 6;
var c = 7;
var perimeter = (a + b + c) / 2;
var area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
console.log((area));