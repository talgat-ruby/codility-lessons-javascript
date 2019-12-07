function solution(A) {
    const l = A.length;
    const set = new Set(A);

    if (l !== set.size) {
        return 0;
    }

    let sum = (l * (l + 1)) / 2;
    for (const a of A) {
        sum -= a;
    }
    return sum === 0 ? 1 : 0;
}

module.exports = solution;
