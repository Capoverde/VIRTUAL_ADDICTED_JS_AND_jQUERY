// alert('01 dziala');
const btn1 = document.getElementById('btn1');
// console.log(btn1);
const body = document.querySelector('body');
console.log(body);


function chbgc () {
  body.style.backgroundColor = "red";
}

btn1.addEventListener('click',chbgc );
