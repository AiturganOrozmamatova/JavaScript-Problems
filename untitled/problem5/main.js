function rotate_the_word(id){
    var element = document.getElementById(id);
    var textNode  = element.childNodes[0];
     var text = textNode.data;
    setInterval(function(){
        text = text[text.length - 1] + text.substring(1, text.length - 1);
        textNode = text.data;
    }, 2);
}
