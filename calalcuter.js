const number = document.querySelectorAll(".calClass");
const opration = document.querySelectorAll(".opr1");
const Delete = document.getElementById("delete");
const Ac = document.getElementById("AC");
const equal = document.getElementById("equal");
const previous_operand = document.getElementById("previous");
const current_operand = document.getElementById("current");
let num1 = "", num2 = "", operation = "";

number.forEach(function (element) {
    element.addEventListener("click", function () {
        if (operation === "" && num1.length < 6) {
            console.log(num1.length)
            num1 += element.innerText;
            current_operand.innerText = num1;
            current_operand.style.color="white";

            console.log(num1)
        } else if (operation !== "" && num2.length < 6) {
            num2 += element.innerText;
            current_operand.innerText += element.innerText
        }
    })

});

opration.forEach(function (element) {
    element.addEventListener("click", function () {
        if (operation === "" && num1 !== "") {
            operation += element.innerText;
            console.log(operation);
            current_operand.innerText += " " + operation;
        }
    })
})
equal.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "") {
        let result = 0;
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        if (operation === "*") {
            result = num1 * num2;
            if (result.toString().length > 6) {
                current_operand.style.color = "red";
                current_operand.innerText = "Error"
            }
            else {
                previous_operand.innerText = current_operand.innerText;
                current_operand.innerText = result;
            }
        } 
        else if (operation === "-") {
            console.log(num1 - num2)
            result = num1 - num2
            if (result.toString().length > 6) {
                current_operand.style.color = "red";
                current_operand.innerText = "Error"
            }
        else{
            previous_operand.innerText = current_operand.innerText;
            current_operand.innerText = result;
        }
            
        } else if (operation === "+") {
            result = num1 + num2
            if (result.toString().length > 6) {
                current_operand.style.color = "red";
                current_operand.innerText = "Error"
            }

            else{ 
            previous_operand.innerText = current_operand.innerText;
            current_operand.innerText = result;
            }
           
            // console.log(num1 + num2)
        } else {
            result = num1 / num2
            
            if (result.toString().length > 6) {
                current_operand.style.color = "red";
                current_operand.innerText = "Error"
            }
            else{
                 previous_operand.innerText = current_operand.innerText;
                 current_operand.innerText = result;
            }
           
            console.log(num1 / num2)
        }
    }
})

Ac.addEventListener("click", function () {
    num1 = "";
    num2 = "";
    operation = "";
    previous_operand.innerText = "";
    current_operand.innerText = "";
});

Delete.addEventListener("click", function () {
    if((num1!=="" && num2=="" && operation=="")){
        num1="";
        current_operand.innerText="";
    }
    else if(num1!=="" && num2!==""){
      num2="";
      current_operand.innerText=` ${num1} ${operation}`;
    }
    else if(num1!=="" && operation!=""){
    operation="";
    current_operand.innerText= `${num1}`;
    }
})


