const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const runTest = 100;
  const e = new Manager("Foo", 1, "test@test.com", runTest);
  expect(e.officeNumber).toBe(runTest);
});

test("getRole() should return \"Manager\"", () => {
  const runTest = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(runTest);
});

test("Can get office number via getOffice()", () => {
  const runTest = 100;
  const e = new Manager("Foo", 1, "test@test.com", runTest);
  expect(e.getOfficeNumber()).toBe(runTest);
});