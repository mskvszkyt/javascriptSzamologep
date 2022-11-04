function Atvalt() {
  numb1 = parseInt(document.getElementById("num1").value);
  numb2 = parseInt(document.getElementById("num2").value);
}

function Osszead() {
  Atvalt();
  document.getElementById("vegeredmeny").innerHTML = numb1 + numb2;
}
function Kivon() {
  Atvalt();
  document.getElementById("vegeredmeny").innerHTML = numb1 - numb2;
}
function Szoroz() {
  Atvalt();
  document.getElementById("vegeredmeny").innerHTML = numb1 * numb2;
}
function Oszt() {
  Atvalt();
  document.getElementById("vegeredmeny").innerHTML = numb1 / numb2;
}
