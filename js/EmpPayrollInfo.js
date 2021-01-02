class EmployeePayroll{
  //getter and setter method
  get id(){ return this._id; }
  set id(id){
    this._id=id;
  }
  
  get name(){ return this._name; }
  set name(name){
    //UC10 - validating only name with min 3 letters & first letter caps is allowed
    let nameRegrx = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(nameRegrx.test(name))
      this._name =name;
    else
      throw "Name is InCorrect";
  }
  
  get profilePic(){ return this._profilePic; }
  set profilePic(profilePic){
    this._profilePic=profilePic;
  }
  
  get gender() { return this._gender; }
  set gender(gender) {
    this._gender = gender;
  }
  
  get department() { return this._department; }
  set department(department) {
      this._department = department;
  }
  
  get salary() { return this._salary; }
  set salary(salary) {
    this._salary = salary;
  }
  
  get note() { return this._note; }
  set note(note) {
  this._note = note;
  }
  
  get startDate() { return this._startDate; }
  set startDate(startDate) {
    //UC10 - date func will provide todays date
    let currentDate = new Date();
    if(startDate > currentDate)
     throw 'start date is a future date';
    let diff = Math.abs(currentDate.getTime()-startDate.getTime())  ;
    if(diff / (1000 * 60 * 60 * 24) > 30)
     throw 'Start Date is beyond 30 days';
    this._startDate = startDate;
  }
  //method
  toString(){
  //giving type of date required
  const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  };
  const empDate = !this.startDate ? "undefined" :this.startDate;
  return "id = "+this.id+ " ,name = "+this.name+" , gender ="+this.gender+" , profilePic ="+this.profilePic+" , department ="+this.department+
          " ,salary = "+ this.salary+ " ,startDate = "+empDate+ ",note =" +this.note;
  }
}