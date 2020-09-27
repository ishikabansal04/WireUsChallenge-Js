function callMom(){
    var yes=confirm("I am Hungry!");
    if(yes)
    {
        var dish=prompt("What would you like to have?");
        document.write("Here's your "+dish);
    }
    else{
        document.write("Ok if you are not hungry then go and prepare tea for me!");
    }
}