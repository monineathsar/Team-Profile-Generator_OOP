const { Manager } = require('../lib/ManagerClass');

describe("Manager", () => {
    test("checks manager array object", () => {
        const employee = new Manager("Katie Anderson", "0064", "katieanderson@gmail.com", "555-555-5555");

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(String));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.officeNumber.split("-").join("")).toHaveLength(10);
        expect(Number.isInteger(Number(employee.officeNumber.split("-").join("")))).toEqual(true);
    })
    test("checks manager class methods", () => {
        const employee = new Manager("Katie Anderson", "0064", "katieanderson@gmail.com", "555-555-5555");

        expect(employee.getName()).toBe(employee.name);
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getEmail()).toBe(employee.email);
        expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
        expect(employee.getRole()).toBe("Manager");
    })
})