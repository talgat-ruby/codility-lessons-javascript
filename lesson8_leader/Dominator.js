function solution(A) {
    const len = A.length;
    const half = Math.floor(len / 2);
    const counter = {};

    for (let i = 0; i < len; i++) {
        const a = A[i];
        if (!counter[a]) {
            counter[a] = 1;
        } else {
            counter[a]++;
        }

        if (counter[a] > half) {
            return i;
        }
    }

    return -1;
}

module.exports = solution;
