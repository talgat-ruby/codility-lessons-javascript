function solution(A, B) {
    const len = A.length;
    const down = []; // B[i] === 1
    let counter = 0;
    for (let i = 0; i < len; i++) {
        const size = A[i];
        const direction = B[i];
        if (direction === 1) {
            down.push(size);
        } else {
            while (down.length > 0 && size > down[down.length - 1]) {
                down.pop();
            }
            if (down.length === 0) {
                counter++;
            }
        }
    }
    return counter + down.length;
}

module.exports = solution;
