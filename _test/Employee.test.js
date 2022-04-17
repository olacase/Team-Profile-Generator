const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Will express Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Will add name with a constructor argument", () => {
        const name = "Alice";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("will setID with a constructor argument", () => {
        const runTest = 100;
        const e = new Employee("Foo", runTest);
        expect(e.id).toBe(runTest);
    });

    it("will set email using constructor argument", () => {
        const runTest = "test@test.com";
        const e = new Employee("Foo", 1, runTest);
        expect(e.email).toBe(runTest);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const runTest = "Alice";
            const e = new Employee(runTest);
            expect(e.getName()).toBe(runTest);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const runTest = 100;
            const e = new Employee("Foo", runTest);
            expect(e.getId()).toBe(runTest);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const runTest = "testing@testing.com";
            const e = new Employee("Foo", 1, runTest);
            expect(e.getEmail()).toBe(runTest);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const runTest = "Employee";
            const e = new Employee("Alice", 1, "test@test.com");
            expect(e.getRole()).toBe(runTest);
        });
    });
    
});