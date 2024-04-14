class Employee{
    constructor(id, name) {
        if (!id || !name) throw new Error("Employee id and name are mandatory")
        
        this.id = id;
        this.name = name;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    getName() { 
        return this.name;
    }

    getName() {
        return this.name;
    }
}

const employee1 = new Employee(1, 'John');
employee1.setSalary(1000);

console.log(employee1);


class Manager extends Employee{
    setDepartment(department) { 
        this.department = department;
    }

    getDepartment() {
        return this.department;
    }
}

const manager1 = new Manager('2', 'nitin');
manager1.setDepartment("Engineering")

console.log(manager1);

