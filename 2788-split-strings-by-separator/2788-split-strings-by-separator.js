/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let result = [];

    for (let word of words) {
        let splitArray = word.split(separator);

        let filteredArray = splitArray.filter(item => item !== "");

        result.push(...filteredArray);
    }

    return result;
};
