function solution(A) {
    let diff = 0;
    const len = A.length;

    if (len >= 2) {
        let min = 0;
        let max = 0;
        for (let i = 1; i < len; i++) {
            if (A[min] > A[i]) {
                min = i;
            } else {
                max = i;
            }
            if (max > min && A[max] - A[min] > diff) {
                diff = A[max] - A[min];
            }
        }
    }

    return diff;
}

module.exports = solution;
