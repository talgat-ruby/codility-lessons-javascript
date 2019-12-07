const solution = require("./OddOccurrencesInArray");

describe("test OddOccurrencesInArray", () => {
    test("[9, 3, 9, 3, 9, 7, 9] -> 7", () => {
        expect(solution([9, 3, 9, 3, 9, 7, 9])).toBe(7);
    });
    test("[1, 1, 1, 0, 0] -> 1", () => {
        expect(solution([1, 1, 1, 0, 0])).toBe(1);
    });
});
