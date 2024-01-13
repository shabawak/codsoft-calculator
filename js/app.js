var firstNumber ="" ;
var secondNumber = 0;
var operator="";

function ClearScreen()
{
    
    document.getElementById("txtLbl").value = "";
    document.getElementById("txtInput").value = "";
    
    
}
function displayNumber(x)
{
    
    var inputValue = document.getElementById('txtInput').value;
    var newValue = (inputValue + x).toString();
    document.getElementById("txtInput").value = newValue; 
    
    
   
}

function getOperator(m)
{   
    var inputValue = document.getElementById('txtInput').value;
    if( ! inputValue == "")
    {
        firstNumber = Number(document.getElementById('txtInput').value);
        operator = m;
        document.getElementById('txtInput').value = "";

        var text = (firstNumber + " " + operator).toString();
        document.getElementById("txtLbl").value = text;
        console.log(firstNumber);
        console.log(operator);
        console.log(text);
    }
}

function Calculate()
{
    if (! firstNumber == "") {
        
        secondNumber = Number(document.getElementById('txtInput').value);

        switch (operator) {
            case '+':
                var sum = Number(firstNumber + secondNumber);
                
                set(sum);
                break;

            case '-':
                var dif = Number(firstNumber - secondNumber);
                set(dif);
                break;

            case '*':
                var prod = Number(firstNumber * secondNumber);
                set(prod);
                break;

            case '/':
                var ratio = Number(firstNumber / secondNumber);
                set(ratio);
                break;
        
            default:
                break;
        }
    }

    function set(answer)
    {
        var lblText = document.getElementById("txtLbl").value;
    
        document.getElementById('txtInput').value = answer;
        document.getElementById("txtLbl").value = (lblText + " " + secondNumber).toString();
        console.log(answer);
    }
}