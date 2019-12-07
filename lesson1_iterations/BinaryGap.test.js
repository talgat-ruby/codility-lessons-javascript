const solution = require("./BinaryGap");

describe("test BinaryGap", () => {
	test("1041 -> 5", () => {
		expect(solution(1041)).toBe(5);
	});
	test("15 -> 0", () => {
		expect(solution(15)).toBe(0);
	});
	test("32 -> 0", () => {
		expect(solution(32)).toBe(0);
	});
});
