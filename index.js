'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @return {string}
 */
module.exports = function(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};