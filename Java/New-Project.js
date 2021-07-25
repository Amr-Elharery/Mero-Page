alert('Hello in my world') ;
function Thanks ()
{
    alert('Thanks For Your Opinion About Me') ;
}
function userName(firstName)
{
    "use strict";
    return "Hello " + firstName + " I'm Amr"
}
var userId = prompt("What is your name?")
document.getElementById("username").innerHTML = userName(userId) ;
