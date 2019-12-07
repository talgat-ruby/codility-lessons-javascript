function solution(A) {
    const len = A.length;
    let total = ((len + 2) * (len + 1)) / 2;

    for (const a of A) {
        total -= a;
    }
    return total;
}

module.exports = solution;
