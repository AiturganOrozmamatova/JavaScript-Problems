var greeting;
var newCustomer = false;
if (newCustomer){
    greeting = function(){
        alert("Thank you for visiting our page! \n Hope you will stay !....")

    };}
    else{
        greeting = function(){
            alert("Welcome back to this page!!! ");

        };
}
close_terminal(greeting);
function close_terminal(message){
    message();
}