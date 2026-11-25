/**
 * @param {number} n
 * @return {number}
 */
function removeZeros(n) {
    let str = String(n);

    let result = str.replaceAll("0", "");

    return Number(result);


}
console.log(removeZeros(1020030));
