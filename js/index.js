var numberValue = "";
let operator = document.getElementsByClassName('operations');

// To change colors of the operators in html file
Array.from(operator).forEach(element => {
    var color = Math.floor(150 * Math.random());
    let id = element.getAttribute('id');
    let colorValue = `rgb(255, ${color}, 0)`;
    document.getElementById(id).style.backgroundColor = colorValue;
    color += 101;
});

//To display Numbers in screen
function numberFunction(element) {
    let value = element.innerHTML;
    numberValue += `${value}`;
    let output2 = document.getElementById('output-2');
    output2.innerHTML = numberValue;
}

//To perform Operations and display operators in screen
function operationFunction(element) {
    let name = element.getAttribute('name');
    if(name == "add"){
        numberValue += "+";
    }
    else if(name == "subtract"){
        numberValue += "-";
    }
    else if(name == "multiply"){
        numberValue += "*";
    }
    else if(name == "modulus"){
        numberValue += "%";
    }
    else if(name == "divide"){
        numberValue += "/";
    }
    else{
        let output1 = document.getElementById('output-1');
        output1.innerHTML = numberValue;
        numberValue = eval(numberValue);
    }
    let output2 = document.getElementById('output-2');
    output2.innerHTML = numberValue;
}

//to delete the values on display
function deleteFunction(element){
    let value = element.innerHTML;
    if(value == "C"){
        let output1 = document.getElementById('output-1');
        output1.innerHTML = numberValue;
        numberValue = "";
        let output = document.getElementById('output-2');
        output.innerHTML = numberValue;
    }
    else if (value == "CE") {
        let variable = parseInt(numberValue) / 10;
        let number = parseInt(variable);
        numberValue = number;
        let output2 = document.getElementById('output-2');
        output2.innerHTML = numberValue;
    }
}