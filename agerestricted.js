function checkAge() {
    let age = document.getElementById("input").value;
    let output1 = document.getElementById("output1");

    if (isNaN(age)) {
        output1.innerHTML = "That isn't a number";
    }

    else if (Number(age) >= 18 && Number(age) < 120) {
        output1.innerHTML = "Welcome";
    }

    else if (Number(age) < 0) {
        output1.innerHTML = "That number is negative";
    }

    else if (Number(age) % 1 !==0) {
        output1.innerHTML = "That number is a decimal";
    } 
    
    else {
        output1.innerHTML = "You are not allowed to enter the website";
    }

}