const weekFn = require("../functions/weekFn.js");

describe("weekFn", () => {
  test.each([
    [1, "Понеділок"],
    [3, "Середа"],
    [7, "Неділя"],
    [9, null],
    [1.5, null],
    ["2", null],
    [0, null],
  ])('should return "%s" for input %d', (input, expected) => {
    expect(weekFn(input)).toBe(expected);
  });
});
