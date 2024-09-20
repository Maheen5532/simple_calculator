
   var firstNum = +document.getElementById('first-num');
   var secNum = +document.getElementById('sec-num');
   var ans = +document.getElementById("answer");

function reset() {
    document.getElementById("first-num").value = "";
    document.getElementById("sec-num").value = "";
    document.getElementById("answer").innerHTML = "";
  }
// ---------
  function multiply() {
    let firstNum = +document.getElementById("first-num").value;
    let secNum = +document.getElementById("sec-num").value;
    let ans = document.getElementById("answer");
  
    if (firstNum != "" && secNum != "") {
      let multiply = firstNum * secNum;
      ans.innerText = `Your Answer is: ${multiply}`;
     }
  }
// -----------
  function division() {
    let firstNum = +document.getElementById("first-num").value;
    let secNum = +document.getElementById("sec-num").value;
    let ans = document.getElementById("answer");
  
    if (firstNum != "" && secNum != "") {
      let multiply = firstNum / secNum;
      ans.innerText = `Your Answer is: ${multiply}`;
     }
  }
// -----------
  function addition() {
    let firstNum = +document.getElementById("first-num").value;
    let secNum = +document.getElementById("sec-num").value;
    let ans = document.getElementById("answer");
  
    if (firstNum != "" && secNum != "") {
      let multiply = firstNum + secNum;
      ans.innerText = `Your Answer is: ${multiply}`;
     }
  }
// -----------

  function subtract() {
    let firstNum = +document.getElementById("first-num").value;
    let secNum = +document.getElementById("sec-num").value;
    let ans = document.getElementById("answer");
  
    if (firstNum != "" && secNum != "") {
      let multiply = firstNum - secNum;
      ans.innerText = `Your Answer is: ${multiply}`;
     }
  }






















// function multiply(){
//     var firstNum = +document.getElementById('first-num')
//     var secNum = +document.getElementById('sec-num')
//     var ans = +document.getElementById(ans)
    

//     if(firstNum !== "" && secNum !=""){
//         let multiply = firstNum*secNum;
//         ans.innerText = `multiplication answer is ${multiply}`
//     }
// }