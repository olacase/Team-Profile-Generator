const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const runTest = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", runTest);
  expect(e.school).toBe(runTest);
});

test("getRole() should return \"Intern\"", () => {
  const runTest = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(runTest);
});

test("Can get school via getSchool()", () => {
  const runTest = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", runTest);
  expect(e.getSchool()).toBe(runTest);
});