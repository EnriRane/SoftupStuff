"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flipAndInvertRowsOfMatrix = void 0;
function flipAndInvertRowsOfMatrix(matrix) {
    const newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        let newRow = [];
        for (let j = row.length - 1; j >= 0; j--) {
            newRow.push(row[j]);
        }
        for (let k = 0; k < newRow.length; k++) {
            if (newRow[k] === 0) {
                newRow[k] = 1;
            }
            else {
                newRow[k] = 0;
            }
        }
        newMatrix.push(newRow);
    }
    return newMatrix;
}
exports.flipAndInvertRowsOfMatrix = flipAndInvertRowsOfMatrix;
