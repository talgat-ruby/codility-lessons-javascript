function solution(A) {
    const set = new Set();
    for (const a of A) {
        if (set.has(a)) {
            set.delete(a);
        } else {
            set.add(a);
        }
    }

    const iter = set.values();
    return iter.next().value;
}

module.exports = solution;
