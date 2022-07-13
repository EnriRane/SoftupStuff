"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLengthOfLastWord = void 0;
function getLengthOfLastWord(name) {
    const stringArray = name.split(' ');
    return stringArray[stringArray.length - 1].length;
}
exports.getLengthOfLastWord = getLengthOfLastWord;
