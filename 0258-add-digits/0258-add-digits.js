/**
 * @param {number} num
 * @return {number}
 */
    var addDigits = function(num) {
    while (num >= 10) {
        let sum = 0;

        while (num > 0) {
            let digit = num % 10;
            sum += digit;
            num = Math.floor(num / 10);
        }

        num = sum;
    }

    return num;
};