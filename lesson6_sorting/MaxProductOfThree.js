function solution(A) {
    let max1 = -1001;
    let max2 = -1001;
    let max3 = -1001;
    let min1 = 1001;
    let min2 = 1001;

    for (const a of A) {
        if (a > max1) {
            [max3, max2, max1] = [max2, max1, a];
        } else if (a > max2) {
            [max3, max2] = [max2, a];
        } else if (a > max3) {
            max3 = a;
        }

        if (a < min1) {
            [min2, min1] = [min1, a];
        } else if (a < min2) {
            min2 = a;
        }
    }

    const tot1 = max2 * max3;
    const tot2 = min1 * min2;

    if (max1 >= 0 && tot2 > tot1) {
        return tot2 * max1;
    } else {
        return tot1 * max1;
    }
}

module.exports = solution;
