/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const para3 = document.getElementById('para3');

btn.addEventListener('click', function () {
  lenConv();
  volConv();
  massConv();
});

function lenConv() {
  let a = input.value;
  let b = 0,
    c = 0;
  b = (a * 3.281).toFixed(3);
  c = (a / 3.281).toFixed(3);
  para1.textContent = `${a} Meters = ${b} Feet  |  ${a} Feet = ${c} Meters`;
}

function volConv() {
  let d = input.value;
  let e = 0,
    f = 0;
  e = (d * 0.264).toFixed(3);
  f = (d / 0.264).toFixed(3);
  para2.textContent = `${d} Liters = ${e} Gallons  |  ${d} Gallons = ${f} Liters`;
}

function massConv() {
  let a = input.value;
  let b = 0,
    c = 0;
  b = (a * 2.204).toFixed(3);
  c = (a / 2.204).toFixed(3);
  para3.textContent = `${input.value} Kilogram = ${b} Pound  |  ${a} Pound = ${c} Kilogram`;
}
