function solution(N) {
	let max = 0;
	let counter = 0;
	const binary = N.toString(2);
	for (let i = 0; i < binary.length; i++) {
		if (binary[i] === "0") {
			counter++;
		} else {
			if (counter > max) {
				max = counter;
			}
			counter = 0;
		}
	}
	console.log(N, max);
	return max;
}

module.exports = solution;
