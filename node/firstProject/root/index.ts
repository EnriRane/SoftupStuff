import {
  getIndexesOfSumElements1,
  getIndexesOfSumElements2,
} from './exercise1';
import { getLengthOfLastWord } from './exercise2';
import { findHammingDistance } from './exercise3';
import { flipAndInvertRowsOfMatrix } from './exercise4';
import { reverseBits } from './exercise5';

//exercise 1
console.log('exercise 1');
const array = [1, 3, 5, 4, 7, 12];
const result = getIndexesOfSumElements1(array, 9);
console.log(result);
const result2 = getIndexesOfSumElements2(array, 9);
console.log(result2);

//exercise 2
console.log('exercise 2');
const input = 'Une jam Enri Rane';
console.log(getLengthOfLastWord(input));

//exercise 3
console.log('exercise 3');
const distance = findHammingDistance(4, 10);
console.log(distance);

//exercise 4
console.log('exercise 4');
const matrix = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
const modifiedMatrix = flipAndInvertRowsOfMatrix(matrix);
console.log(modifiedMatrix);
//exercise 5
console.log('exercise 5');
const numberInBits = '00000010100101000001111010011100';
console.log(reverseBits(numberInBits));
