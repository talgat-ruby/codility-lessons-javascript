function solution(A) {
    const len = A.length;
    if (len >= 3) {
        A.sort((a, b) => a - b);
        for (let i = 2; i < len; i++) {
            if (A[i - 2] + A[i - 1] > A[i]) {
                return 1;
            }
        }
    }
    return 0;
}

module.exports = solution;
