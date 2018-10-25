var fruit = ["Apple", "Orange", "Pineapple", "Banana"];
var cupcakes = fruit.map(function(arrayCell){
    return "\n" + arrayCell + " cupcakes. ";
});
alert(cupcakes);