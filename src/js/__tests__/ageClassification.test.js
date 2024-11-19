const ageClassification = require("../functions/ageClassification.js");

describe("ageClassification", () => {
  test.each([
    [-1, null],
    [0, "Дитинство"],
    [24, "Дитинство"],
    [24.01, "Молодість"],
    [44, "Молодість"],
    [44.01, "Зрілість"],
    [65, "Зрілість"],
    [65.1, "Старість"],
    [75, "Старість"],
    [75.01, "Довголіття"],
    [90, "Довголіття"],
    [90.01, "Рекорд"],
    [122, "Рекорд"],
    [122.01, null],
    [150, null]
  ])('should return "%s" for age %d', (age, expected) => {
    expect(ageClassification(age)).toBe(expected);
  });
});
