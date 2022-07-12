const { Engineer } = require('../lib/EngineerClass');

describe("Engineer", () => {
    test("checks engineer array object", () => {
        const employee = new Engineer("Brady Jackson", "0231", "bradyjackson@gmail.com", "bradyjackson39");

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(String));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.github).toEqual(expect.any(String));
    })
    test("checks employee id is a number with correct length", () => {
        const employee = new Engineer("Brady Jackson", "0231", "bradyjackson@gmail.com", "bradyjackson39");

        expect(employee.id).toHaveLength(4);
        expect(Number.isInteger(Number(employee.id))).toEqual(true);
    })
    test("checks GitHub username to not have '@' symbol", () => {
        const employee = new Engineer("Brady Jackson", "0231", "bradyjackson@gmail.com", "bradyjackson39");

        expect(employee.github).toEqual(expect.not.stringContaining("@"));
    })
    test("checks engineer class methods", () => {
        const employee = new Engineer("Brady Jackson", "0231", "bradyjackson@gmail.com", "bradyjackson39");

        expect(employee.getName()).toBe(employee.name);
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getEmail()).toBe(employee.email);
        expect(employee.getGitHub()).toBe(employee.github);
        expect(employee.getRole()).toBe("Engineer");
    })
})