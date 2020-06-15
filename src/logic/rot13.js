'use strict';

function charCodeOf(char) {
    return char.charCodeAt(0);
}

function isBetween(charCode, begin, inclusiveEnd) {
    return charCode >= charCodeOf(begin) && charCode <= charCodeOf(inclusiveEnd);
}

function isBetweenCaseInsensitive(charCode, begin, inclusiveEnd) {
    return isBetween(charCode, begin.toLowerCase(), inclusiveEnd.toLowerCase())
        || isBetween(charCode, begin.toUpperCase(), inclusiveEnd.toUpperCase());
}

function transform(char) {
    const charCode = charCodeOf(char);
    if (isBetweenCaseInsensitive(charCode, 'n', 'z')) return String.fromCharCode(charCode - 13);
    if (isBetweenCaseInsensitive(charCode, 'a', 'm')) return String.fromCharCode(charCode + 13);
    return char;
}

module.exports = class Rot13 {
    static create() {
        return new Rot13();
    }

    transform(input) {
        if (typeof input !== "string") throw new Error("Expect input to be a string");
        return [...input].map(transform).join('');
    }
};