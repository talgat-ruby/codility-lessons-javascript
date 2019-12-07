const solution = require("./PermMissingElem");

describe("test PermMissingElem", () => {
    test("[2, 3, 1, 5] -> 4", () => {
        expect(solution([2, 3, 1, 5])).toBe(4);
    });
    test("[2] -> 1", () => {
        expect(solution([2])).toBe(1);
    });
});
