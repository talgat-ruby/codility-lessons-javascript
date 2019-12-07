const solution = require("./CyclicRotation");

describe("test CyclicRotation", () => {
    test("([3, 8, 9, 7, 6], 3) -> [9, 7, 6, 3, 8]", () => {
        expect(solution([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
    });
    test("([0, 0, 0], 1) -> [0, 0, 0]", () => {
        expect(solution([0, 0, 0], 1)).toEqual([0, 0, 0]);
    });
    test("([1, 2, 3, 4], 4) -> [1, 2, 3, 4]", () => {
        expect(solution([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    });
    test("([1, 1, 2, 3, 5], 42) -> [3, 5, 1, 1, 2]", () => {
        expect(solution([1, 1, 2, 3, 5], 42)).toEqual([3, 5, 1, 1, 2]);
    });
});
