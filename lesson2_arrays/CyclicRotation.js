function solution(A, K) {
    const len = A.length;
    const shift = len - (K % len);
    return [...A.slice(shift), ...A.slice(0, shift)];
}

module.exports = solution;
