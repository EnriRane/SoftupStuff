"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = require("./exercise1");
const exercise2_1 = require("./exercise2");
const exercise3_1 = require("./exercise3");
const exercise4_1 = require("./exercise4");
const exercise5_1 = require("./exercise5");
//exercise 1
console.log('exercise 1');
const array = [1, 3, 5, 4, 7, 12];
const result = (0, exercise1_1.getIndexesOfSumElements1)(array, 9);
console.log(result);
const result2 = (0, exercise1_1.getIndexesOfSumElements2)(array, 9);
console.log(result2);
//exercise 2
console.log('exercise 2');
const input = 'Une jam Enri Rane';
console.log((0, exercise2_1.getLengthOfLastWord)(input));
//exercise 3
console.log('exercise 3');
const distance = (0, exercise3_1.findHammingDistance)(4, 10);
console.log(distance);
//exercise 4
console.log('exercise 4');
const matrix = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
];
const modifiedMatrix = (0, exercise4_1.flipAndInvertRowsOfMatrix)(matrix);
console.log(modifiedMatrix);
//exercise 5
console.log('exercise 5');
const numberInBits = '00000010100101000001111010011100';
console.log((0, exercise5_1.reverseBits)(numberInBits));
