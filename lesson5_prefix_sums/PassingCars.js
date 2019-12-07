function solution(A) {
    let ones = 0;
    let pairs = 0;
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i] === 1) {
            ones++;
        } else {
            pairs += ones;
        }
        if (pairs > 1000000000) {
            return -1;
        }
    }
    return pairs;
}

module.exports = solution;
