//UC10 - Valdation for Name and Date
//UC12 
/**
 * To be executed after loading the DOM content- Document Object Model i.e. the webpage
 *  Attaching an event handler for the load of DOM content 
 */
window.addEventListener('DOMContentLoaded',(event) =>{
//validation for name
const name =document.querySelector('#name');
const textError = document.querySelector('.text-error');
 // Add event handler to the name field of the main page
name.addEventListener('input', function(){
  // If name is empty i.e. user did not entered any value no error message
  if(name.value.length ===0){
    textError.textContent ="";
    return;
  }
  /**
   * else validate the name and then print the specified error message to the screen
   * Error-message specified in the event by internally validating to the setter in EmployeePayroll Class
   */
  try{
    (new EmployeePayroll()).name = name.value;
    textError.textContent ="";
  }catch(e){
    textError.textContent = e;
  }
});

// UC8 -Add eventListener on salary range
const salary= document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
output.textContent =salary.value;
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
});



