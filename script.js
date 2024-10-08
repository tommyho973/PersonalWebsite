function addition() {
  let input1 = document.getElementById("first-number").value;
  let input2 = document.getElementById("second-number").value;
  let output = document.getElementById("output");
  output.style.color = "black";
  if (isNaN(input1)) {
    output.innerHTML = "<p>Please enter a valid first number.</p>";
  } else if (isNaN(input2)) {
    output.innerHTML = "<p>Please enter a valid second number.</p>";
  } else {
    let result = Number(input1) + Number(input2);
    if (result < 0) {
      output.style.color = "red";
    }
    output.innerHTML = String(result);
  }
}
function subtract() {
  let input1 = document.getElementById("first-number").value;
  let input2 = document.getElementById("second-number").value;
  let output = document.getElementById("output");
  output.style.color = "black";
  if (isNaN(input1)) {
    output.innerHTML = "<p>Please enter a valid first number.</p>";
  } else if (isNaN(input2)) {
    output.innerHTML = "<p>Please enter a valid second number.</p>";
  } else {
    let result = Number(input1) - Number(input2);
    if (result < 0) {
      output.style.color = "red";
    }
    output.innerHTML = String(result);
  }
}
function multiply() {
  let input1 = document.getElementById("first-number").value;
  let input2 = document.getElementById("second-number").value;
  let output = document.getElementById("output");
  output.style.color = "black";
  if (isNaN(input1)) {
    output.innerHTML = "<p>Please enter a valid first number.</p>";
  } else if (isNaN(input2)) {
    output.innerHTML = "<p>Please enter a valid second number.</p>";
  } else {
    let result = Number(input1) * Number(input2);
    if (result < 0) {
      output.style.color = "red";
    }
    output.innerHTML = String(result);
  }
}
function divide() {
  let input1 = document.getElementById("first-number").value;
  let input2 = document.getElementById("second-number").value;
  let output = document.getElementById("output");
  output.style.color = "black";
  if (isNaN(input1)) {
    output.innerHTML = "<p>Please enter a valid first number.</p>";
  } else if (isNaN(input2)) {
    output.innerHTML = "<p>Please enter a valid second number.</p>";
  } else if (input2 == 0) {
    output.innerHTML = "<p>Please enter a number that isn't 0.</p>";
  } else {
    let result = Number(input1) / Number(input2);
    if (result < 0) {
      output.style.color = "red";
    }
    output.innerHTML = String(result);
  }
}
function power() {
  let input1 = document.getElementById("first-number").value;
  let input2 = document.getElementById("second-number").value;
  let output = document.getElementById("output");
  output.style.color = "black";
  if (isNaN(input1)) {
    output.innerHTML = "<p>Please enter a valid first number.</p>";
  } else if (isNaN(input2)) {
    output.innerHTML = "<p>Please enter a valid second number.</p>";
  } else if (input2 % 1 != 0 || input2 < 0) {
    output.innerHTML =
      "<p>Please enter a valid second number. (An integer >= 0)</p>";
  } else {
    let result = 1;
    for (let i = 0; i < Number(input2); i++) {
      result = result * Number(input1);
    }
    if (result < 0) {
      output.style.color = "red";
    }
    output.innerHTML = String(result);
  }
}
function erase() {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("output").innerHTML = "";
}
