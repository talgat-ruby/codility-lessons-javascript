function solution(A) {
    let min = Number.POSITIVE_INFINITY;
    let diff = A.reduce((a, b) => a + b);

    for (let i = 0; i < A.length - 1; i++) {
        diff -= 2 * A[i];
        if (min > Math.abs(diff)) {
            min = Math.abs(diff);
        }
    }
    return min;
}

module.exports = solution;
