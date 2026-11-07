/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
    let lastTwo = s.lastIndexOf("2");

    if (lastTwo === -1) {
        return "";
    }

    return s.slice(0, lastTwo + 1);
};