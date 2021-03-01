// 56. Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

function digitsProduct(product) {
    if (product === 0) {
        return 10;
    } else if (product === 1) {
        return 1;
    }

    const digits = [];
    while (product > 1) {
        let found = false;
        for (let factor = 9; factor > 1; factor--) {
            if (product % factor === 0) {
                digits.unshift(factor);
                product /= factor;
                found = true;
                break;
            }
        }
        if (!found && product > 1) {
            return -1;
        }
    }

    return +digits.reduce((a, b) => a * 10 + b, 0);
}