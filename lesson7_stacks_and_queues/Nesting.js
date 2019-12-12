function solution(S) {
    const open = "(";
    let counter = 0;

    for (let i = 0; i < S.length; i++) {
        const s = S[i];

        if (s === open) {
            counter++;
        } else if (counter) {
            counter--;
        } else {
            return 0;
        }
    }
    return counter ? 0 : 1;
}

module.exports = solution;
