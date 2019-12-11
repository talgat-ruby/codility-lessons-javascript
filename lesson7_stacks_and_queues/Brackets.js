function solution(S) {
    const open = ["(", "{", "["];
    const close = [")", "}", "]"];
    const brackets = [];

    for (let i = 0; i < S.length; i++) {
        const s = S[i];

        const openI = open.indexOf(s);
        const closeI = close.indexOf(s);
        if (openI > -1) {
            brackets.push(openI);
        } else if (closeI > -1 && closeI !== brackets.pop()) {
            return 0;
        }
    }
    return brackets.length ? 0 : 1;
}

module.exports = solution;
