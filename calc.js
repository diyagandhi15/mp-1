function addition() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) + Number(second);
    if (result < 0){
        let output = document.getElementById("output")
        output.style.color = "red"
        output.innerHTML=String(result);
    }
    else {
        let output = document.getElementById("output")
        output.style.color = "black"
        output.innerHTML=String(result);
    }
}

function subtraction() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) - Number(second);
    if (result < 0){
        let output = document.getElementById("output")
        output.style.color = "red"
        output.innerHTML=String(result);
    }
    else {
        let output = document.getElementById("output")
        output.style.color = "black"
        output.innerHTML=String(result);
    }
}

function multiplication() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) * Number(second);
    if (result < 0){
        let output = document.getElementById("output")
        output.style.color = "red"
        output.innerHTML=String(result);
    }
    else {
        let output = document.getElementById("output")
        output.style.color = "black"
        output.innerHTML=String(result);
    }
}

function division() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) / Number(second);
    if (result < 0){
        let output = document.getElementById("output")
        output.style.color = "red"
        output.innerHTML=String(result);
    }
    else {
        let output = document.getElementById("output")
        output.style.color = "black"
        output.innerHTML=String(result);
    }
}

function power() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = 1;

    for(let i = 0; i < second; i=i+1) {
        result = first*result
    }

    document.getElementById("output").innerHTML=String(result);
}

function clearInput() {
    document.getElementById("first-number").value = ""; 
    document.getElementById("second-number").value = ""; 
}