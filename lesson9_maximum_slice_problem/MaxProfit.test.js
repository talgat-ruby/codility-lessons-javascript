const solution = require("./MaxProfit");

describe("test MaxProfit", () => {
    test("[23171, 21011, 21123, 21366, 21013, 21367] -> 356", () => {
        expect(solution([23171, 21011, 21123, 21366, 21013, 21367])).toBe(356);
    });
});
