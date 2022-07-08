const Intern = require('../lib/InternClass');

describe("Intern", () => {
    test("checks intern array object", () => {
        const employee = new Intern("Cloe Swift", "0506", "cloeswift@gmail.com", "UC Berkeley");

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(String));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.school).toEqual(expect.any(String));
    })
    test("checks intern class methods", () => {
        const employee = new Intern("Cloe Swift", "0506", "cloeswift@gmail.com", "UC Berkeley");

        expect(employee.getName()).toBe(employee.name);
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getEmail()).toBe(employee.email);
        expect(employee.getSchool()).toBe(employee.school);
        expect(employee.getRole()).toBe("Intern");
    })
})