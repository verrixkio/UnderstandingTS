// you can use abstract to mark a class, this forces you to use a certain method in all other inhertied classes.


//Private constructor. Helpful to manage singleton pattern.


class Department { 
  private employees: string[] = [];

  //Allows you to write functions that run on creation of the class.
  //Shorthand for class propertoes like id and public. Can be declared elsewhere. 
  constructor(private readonly id: string, public name: string) {
  }

  describe() {
    console.log(`Department(${this.id}): + ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

//extends keyword inherits from another class.
class ITDepartment extends Department {
  private lastReport: string;

  //Can add a getter to retieve something private from another class
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found.')
  }

  //Setter
  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  constructor(id:string, public reports: string[]) {
    // super calls the parent class constructor.
    super(id, 'IT');
    this.lastReport = reports[0];
  }

  addReport(text: string){
    this.reports.push(text);
    this.lastReport = text[0]
  }

  printReport() {
    console.log(this.reports);
  }
}

//Constructor is called at this point.
const it = new ITDepartment('d1', []);
console.log(it.mostRecentReport);