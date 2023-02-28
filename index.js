//ToDo List Modal
const inputtodo = document.querySelector('#newtodobox');
const addtodobtn = document.querySelector('#addtodo');
const mylist = document.querySelector('#mylist');
addtodobtn.addEventListener('click', (e)=>{
  if(inputtodo.value != ""){
    e.preventDefault();

    const newtodo = document.createElement('li');
    newtodo.className = ("list-group-item align-middle rounded");
    newtodo.innerText = inputtodo.value;
    newtodo.addEventListener('click', ()=>{
    newtodo.classList.toggle('completedtodo');
  })
    mylist.appendChild(newtodo);

    const closebtn = document.createElement('span');
    closebtn.className = ('btn float-end');
    closebtn.innerText = 'X';
    newtodo.appendChild(closebtn);
  }
    const deletebtn = document.querySelectorAll('span');
    for(let i=0; i<deletebtn.length; i++){
    deletebtn[i].addEventListener('click', ()=>{
      deletebtn[i].parentElement.style.display = 'none';
      deletebtn[i].parentElement.remove();
    })
  }  
  inputtodo.value = "";
})

//Tip Calculator Modal
const resetButton = document.querySelector("#resetBtn", resetForm);
const calculateBtn = document.querySelector("#calcBtn");

function runApp(){
  let tableBill = parseInt(document.getElementById("preTotal").value);
  let inputTip = parseFloat(document.getElementById("selectTip").value) / 100;
  let numGuests = parseInt(document.getElementById("totalGuests").value) + 1;
  let totalTip = tableBill * inputTip;
  let tipPerPerson = totalTip / numGuests;

  document.getElementById("tipAmountOutput").value = Math.ceil(tipPerPerson);
  document.getElementById("billAmountOutput").value = (tableBill + totalTip) / numGuests;
};

function resetForm(){
  document.getElementById("tipCalcForm").reset();
};

//Reveal
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 50;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('revealsactive');
    }
    else{
      reveals[i].classList.remove('revealsactive');
    }
  }
}

//Dark/Light Mode Toggle

const colorToggle = document.getElementById("darklightToggle");

$(document).ready(function(){
  $("#darklightToggle").click(function(){
    $("div").toggleClass("bg-dark", "bg-light");
  });
});