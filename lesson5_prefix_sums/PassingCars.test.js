const solution = require("./PassingCars");

describe("test PassingCars", () => {
    test("[0, 1, 0, 1, 1] -> 5", () => {
        expect(solution([0, 1, 0, 1, 1])).toBe(5);
    });
});
