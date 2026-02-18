let total = 0; 

function tickUp() {
    total++;
    document.getElementById("counter").innerHTML = total;
}

function tickDown() {
    total--;
    document.getElementById("counter").innerHTML = total;
}

function runForLoop() {
    document.getElementById("forLoopResult").innerHTML = "";

    for (let i = 0; i <= total; i++) {
        document.getElementById("forLoopResult").innerHTML += i + " ";
    }
}

function showOddNumbers() {
    document.getElementById("oddNumberResult").innerHTML = "";

    for (let i = 1; i <= total; i++) {
        if(i % 2 != 0) {
            document.getElementById("oddNumberResult").innerHTML += i + " ";
        }
    }
}

function addMultiplesToArray() {
    const arr = [];
    let j = 0;
    
    for (let i = total; i >= 5; i--) {
        if(i % 5 == 0) {
            arr[j] = i;
            j++;
        }
    }
    console.log(arr);

}

function printCarObject() {
    const car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}

function loadCar(num) {
    let car;

    if (num == 1) car = carObject1;
    else if (num == 2) car = carObject2;
    else if (num == 3) car = carObject3;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}


function changeColor(num) {
    let para = document.getElementById("styleParagraph");

    if(num == 1)  para.style.color = "red";
    else if (num == 2) para.style.color = "green";
    else if (num == 3) para.style.color = "blue";

}