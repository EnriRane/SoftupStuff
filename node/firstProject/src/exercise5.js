"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseBits = void 0;
function reverseBits(numberInBits) {
    let reversedNumber = '';
    for (let i = numberInBits.length; i > 0; i--) {
        reversedNumber = reversedNumber + numberInBits.charAt(i);
    }
    return reversedNumber;
}
exports.reverseBits = reverseBits;
