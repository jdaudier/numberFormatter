'use strict';

/**
 * Adds commas to a number
 * @param  {String} number
 * @return {String}
 */
module.exports = function (number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};