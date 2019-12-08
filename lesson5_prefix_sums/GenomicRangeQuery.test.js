const solution = require("./GenomicRangeQuery");

describe("test GenomicRangeQuery", () => {
    test("('CAGCCTA', [2, 5, 0], [4, 5, 6]) -> [2, 4, 1]", () => {
        expect(solution("CAGCCTA", [2, 5, 0], [4, 5, 6])).toEqual([2, 4, 1]);
    });
});
