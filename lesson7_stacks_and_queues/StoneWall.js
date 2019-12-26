function solution(H) {
    let counter = 1;
    let set = new Set([H[0]]);
    let min = null;

    for (let i = 1; i < H.length; i++) {
        const h = H[i];
        if (H[i - 1] < h) {
            if (min !== null) {
                const arr = [...set];
                const ind = arr.findIndex(a => a > min);
                set = new Set([...arr.slice(0, ind), min]);
                min = null;
            }
            set.add(h);
            counter++;
        } else if (H[i - 1] > h) {
            min = h;
            if (!set.has(h)) {
                counter++;
            }
        }
    }

    return counter;
}

module.exports = solution;
