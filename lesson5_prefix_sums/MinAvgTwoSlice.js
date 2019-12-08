function solution(A) {
    const len = A.length - 1;
    let i = 0;
    let minStart = 0;
    let minAvg = 10001;

    while (i < len) {
        const sum1 = A[i] + A[i + 1];
        const avg1 = sum1 / 2;
        if (minAvg > avg1) {
            minAvg = avg1;
            minStart = i;
        }

        if (Number.isInteger(A[i + 2])) {
            const avg2 = (sum1 + A[i + 2]) / 3;
            if (minAvg > avg2) {
                minAvg = avg2;
                minStart = i;
            }
        }
        i++;
    }
    return minStart;
}

module.exports = solution;
