class Department { 
  private employees: string[] = [];

  //Allows you to write functions that run on creation of the class.
  //Shorthand for adding values to the class like id and public. Can be declared elsewhere. 
  constructor(private readonly id: string, public name: string) {
  }

  describe() {
    console.log(`Department(${this.id}):  + ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

//Constructor is called at this point.
const accounting = new Department('d1', 'Accounting');
console.log("🚀 ~ file: app.ts ~ line 12 ~ accounting", accounting)
accounting.describe();

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInfo();