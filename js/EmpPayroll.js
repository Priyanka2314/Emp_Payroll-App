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
date.addEventListener('input', function () {
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

//UC13 - Create Employee Payroll object on save
const save = () => {
  try{
    let employeePayRollData = createEmployeePayroll();
    //UC14
    createAndUpdateStorage(employeePayRollData);
  }catch(e){
    return;
  }
}

//UC14: Local storage
function createAndUpdateStorage(employeePayRollData){

  let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

  if(employeePayrollList!=undefined){
    employeePayrollList.push(employeePayRollData);
  }else{
    employeePayrollList = [employeePayRollData]
  }
  alert(employeePayrollList.toString());
  localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

const createEmployeePayroll = () =>{
  let employeePayRollData = new EmployeePayroll();
  try{
    employeePayRollData.name = getInputValueById('#name');
  }catch(e){
    setTextValue('.text-error',e);
    throw e;
  }
  employeePayRollData.profilePic = getSelectedValues('[name=profile]').pop();
  employeePayRollData.gender = getSelectedValues('[name=gender]').pop();
  employeePayRollData.department = getSelectedValues('[name=department]');
  employeePayRollData.salary = getInputValueById('#salary');
  employeePayRollData.note =getInputValueById('#notes');
  let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+ getInputValueById('#year');
  employeePayRollData.date =Date.parse(date);
  alert(employeePayRollData.toString());
  return employeePayRollData;
}

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let setItems = [];
  allItems.forEach(item => {
    if(item.checked) 
     setItems.push(item.value);
  });
  return setItems;
}

/**
 * 1: queryselector is the newer feature.
 * 2: The queyselector method can be used when selecting by element name, nesting, or class name.
 * 3: querySelector lets you find elements with rules that can't be expressed with getElementById
 */

 const getInputValueById =(id) =>{
   let value = document.querySelector(id).value;
   return value;
 }

 /**
  * 1: getElementById is better supported than querySelector in older versions
  *    of the browsers.
  * 2: The thing with getElementById is that it only allows to select an element by its id.
  */

  const getInputElementValue = (id) =>{
    let value = document.getElementById(id).value;
    return value;
  }

  //UC15 Instead of reset method we can call form button reset

  const restForm =() =>{
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
  }

  const unsetSelectedValues = (propertyValue) =>{
    let allItems =document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
      item.checked = false;
    });
  }

  const setTextValue =(id,value) => {
    const element = document.querySelector(id);
    element.textContent =value;
  }

  const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.value =value ;
  }




