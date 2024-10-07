const textBox = document.getElementById("textBox");
const toFeh = document.getElementById("toFeh");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");
let temp;




function convert(){
      if(toFeh.checked){
            temp = Number(textBox.value);
            temp = temp * 9 / 5 + 32;
            result.textContent = temp.toFixed(1) + "˚";
      }
      else if(toCel.checked){
            temp = Number(textBox.value);
            temp = (temp - 32) * (5/9);
            result.textContent = temp.toFixed(1) + "˚";
      }
      else{
            result.textContent = "Select a unit"
      }
}