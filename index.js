//EX.1

var number =   parseInt( prompt('Enter a number between 1-7') )
if(number<1 || number>7)
{
alert("Wrong input")
}
switch(number)
{
    case 1: 
    alert("It\’s Saturday");
        break;
case 2:
        alert("It\’s Sunday");
    break;

case 3:
        alert("It\’s Monday");
    break;

case 4:
        alert("It\’s Tuesday");
    break;

case 5:
        alert("It\’s Wednesday");
    break;

case 6:
        alert("It\’s Thursday");
    break;

case 7:
        alert("It\’s Friday");
    break;

default:
        alert("Not a valid day");
    break;  
}



//Ex.2
alert("Enter 5 Names")
var arr=[5]
for(var i=0 ;  i<5 ; i++)
{
    arr[i] = prompt("Enter name number "+ (i+1) + ": ")
}
var search =  prompt( "Search for a name : ")
var x =0
for(var i=0 ;  i<5 ; i++)
    {
        if(search===arr[i])
        {
           x=1
           var y=i
        }
        else{
           x=0
        }
    }

if(x=1)
    {
        alert("The order of the name is : "+(y+1))
    }
    else{
        alert("The name is not found")
    }    




//EX.3



var userInput = prompt("Please enter a string:");


var wordCount = 0;
var inWord = false;


for (var i = 0; i < userInput.length; i++) {

    if (userInput[i] !== ' ' && userInput[i] !== '\t' && userInput[i] !== '\n') {
        if (!inWord) {
            inWord = true;
            wordCount++;
        }
    } else {
        inWord = false;
    }
}


alert("The string has " + wordCount + " words.");
