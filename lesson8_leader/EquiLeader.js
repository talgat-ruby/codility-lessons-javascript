function solution(A) {
    let dom = null;
    const len = A.length;
    const half = Math.ceil(len / 2);
    const numsCounter = {};

    for (const a of A) {
        if (!numsCounter[a]) {
            numsCounter[a] = 1;
        } else {
            numsCounter[a]++;
        }

        if (numsCounter[a] > half) {
            dom = a;
        }
    }

    if (dom === null) {
        return 0;
    } else {
        let equiLeaders = 0;
        const domTotal = numsCounter[dom];
        let domCounter = 0;
        for (let i = 0; i < len; i++) {
            const a = A[i];
            if (a === dom) {
                domCounter++;
            }
            if (
                2 * domCounter > i + 1 &&
                2 * (domTotal - domCounter) > len - i - 1
            ) {
                equiLeaders++;
            }
        }
        return equiLeaders;
    }
}

module.exports = solution;
