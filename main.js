const submitButton = document.querySelector("#submitButton");
let resultText = document.querySelector("#mainSectionContainerResultText");
let inputs = document.querySelectorAll("input");
let firstNumber;
let secondNumber;
let thirdNumber;

function verifyNumbers(){
    firstNumber = parseFloat(document.querySelector("#input1").value);
    secondNumber = parseFloat(document.querySelector("#input2").value);
    thirdNumber = parseFloat(document.querySelector("#input3").value);

    if(isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)){
        alert("Write a valid number!");
        return;
    }else{
        checkGreatestNumber(firstNumber, secondNumber, thirdNumber);
        inputs.forEach(input => {
            input.value = "";
        });
    }
}


function whenButtonIsClicked(){
    submitButton.addEventListener("click", verifyNumbers)
}


function whenEnterIsClicked(){
    document.addEventListener("keydown", (keyClickEvent)=>{
        if(keyClickEvent.key === "Enter"){
            verifyNumbers();
        }
    })
}

function checkGreatestNumber(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        resultText.textContent = `${n1} is the greatest number!`;
    }else if(n2 > n1 && n2 > n3){
        resultText.textContent = `${n2} is the greatest number!`;
    }else if(n3 > n1 && n3 > n2){
        resultText.textContent = `${n3} is the greatest number!`;
    }
}

whenButtonIsClicked();
whenEnterIsClicked();