function solution(S, P, Q) {
    const result = [];
    const factors = ["A", "C", "G", "T"];
    const len = P.length;
    for (let i = 0; i < len; i++) {
        const s = S.slice(P[i], Q[i] + 1);
        for (let j = 0; j < factors.length; j++) {
            if (s.includes(factors[j])) {
                result.push(j + 1);
                break;
            }
        }
    }
    return result;
}

module.exports = solution;
