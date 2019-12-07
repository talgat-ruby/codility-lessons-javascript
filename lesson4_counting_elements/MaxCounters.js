function solution(N, A) {
    let map = new Map();
    let newMax = 0;
    let curMax = 0;

    for (const a of A) {
        if (a > N) {
            curMax = newMax;
            map = new Map();
        } else {
            const val = (map.get(a) || curMax) + 1;
            map.set(a, val);
            if (val > newMax) {
                newMax = val;
            }
        }
    }

    const counters = [];
    for (let i = 0; i < N; i++) {
        counters[i] = map.get(i + 1) || curMax;
    }
    return counters;
}

module.exports = solution;
