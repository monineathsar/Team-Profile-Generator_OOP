const Employee = require('../lib/EmployeeClass');

describe("Employee", () => {
    test("checks employee array object", () => {
        const employee = new Employee("Emily Johnson", "0123", "emilyjohnson@gmail.com");

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(String));
        expect(employee.email).toEqual(expect.any(String));
    })
    test("checks employee id is a number with correct length", () => {
        const employee = new Employee("Emily Johnson", "0123", "emilyjohnson@gmail.com");

        expect(employee.id).toHaveLength(4);
        expect(Number.isInteger(Number(employee.id))).toEqual(true);
    })
    test("checks employee class methods", () => {
        const employee = new Employee("Emily Johnson", "0123", "emilyjohnson@gmail.com");

        expect(employee.getName()).toBe(employee.name);
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getEmail()).toBe(employee.email);
        expect(employee.getRole()).toBe("Employee");
    })
  
})