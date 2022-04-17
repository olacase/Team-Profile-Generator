const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const runTest = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", runTest);
  expect(e.github).toBe(runTest);
});

test("getRole() should return \"Engineer\"", () => {
  const runTest = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(runTest);
});

test("Can get GitHub username via getGithub()", () => {
  const runTest = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", runTest);
  expect(e.getGithub()).toBe(runTest);
});