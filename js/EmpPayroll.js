// UC8 -Add eventListener on salary range
const salary= document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
output.textContent =salary.value;
});

//UC10 - Valdation for Name and Date
window.addEventListener('DOMContentLoaded',(event) =>{
//validation for name
const name =document.querySelector('#name');
const textError = document.querySelector('.text-error')
name.addEventListener('input', function(){
  if(name.value.length ===0){
    textError.textContent ="";
    return;
  }
  try{
    (new EmployeePayroll()).name = name.value;
    textError.textContent ="";
  }catch(e){
    textError.textContent = e;
  }
});
//Validation for date
const date = document.querySelector('#date');
const dateError = document.querySelector('.date-error');
const getInputValueById = (id) => {
let value = document.querySelector(id).value;
  return value;
}
date.addEventListener('click', function () {
let startDate = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
getInputValueById('#year');
  try {
    (new EmployeePayRoll()).startDate = new Date(Date.parse(startDate));
    dateError.textContent = "";
  } catch (e) {
      dateError.textContent = e;
    }

  });
})