module.exports = function zeros(expression) {
    let result = 0;
    const arr = expression.split('*');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('!!')) {
            let res = arr[i].split('');
            res.splice(arr[i].length - 2, 2);
            const fact = getZerosFromDoubleFactorial(parseInt(res.join('')));
            result = result === 0 ? fact : result + fact;
        } else {
            let res = arr[i].split('');
            res.splice(arr[i].length - 1, 1);
            const fact = getZerosFromFactorial(parseInt(res.join('')));
            result = result === 0 ? fact : result + fact;
        }
    }

    return result;
}

function getZerosFromFactorial(number) {
    let count = 0;
    for (let i = 5; number / i >= 1; i *= 5) {
        count += Math.floor(number / i);
    }

    return count;
}

function getZerosFromDoubleFactorial(number) {
    let result = 0;
    for (let i = number; i > 0; i = i - 2) {
        if (i % 5 === 0) {
            let number = i;
            while (number % 5 === 0) {
                number = number / 5;
                result++;
            }
        }
    }
    return result;
}
