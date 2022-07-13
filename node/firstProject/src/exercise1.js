"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexesOfSumElements2 = exports.getIndexesOfSumElements1 = void 0;
function getIndexesOfSumElements1(array, target = 9) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
exports.getIndexesOfSumElements1 = getIndexesOfSumElements1;
function getIndexesOfSumElements2(array, target = 9) {
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
        let difference = target - array[i];
        if (map.has(difference)) {
            return [map.get(difference), i];
        }
        map.set(array[i], i);
    }
    return [];
}
exports.getIndexesOfSumElements2 = getIndexesOfSumElements2;
