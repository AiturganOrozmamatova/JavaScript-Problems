function check(){
    var x = Math.floor(Math.random() + 1);
    var y = document.getElementById(' inputField');
    if (parseInt(x) === parseInt(y)){
        alert ("Good job! ");
    }
    else{
        alert("Try one more time!");
    }
}