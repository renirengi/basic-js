import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (/* matrix */) {
  var matrix = arguments[0];
  
  let newMatrix = new Array(matrix.length);
  
  for (let i=0;i < newMatrix.length; i++){
    newMatrix[i] = new Array(matrix[i].length);
  }
  
  for(let k=0;k<newMatrix.length;k++){
    for(let j=0; j<newMatrix[k].length; j++){
      newMatrix[k][j] = Val(k-1,j-1) + Val(k-1,j) + 
      Val(k-1,j+1) + Val(k,j-1) + Val(k,j+1) + 
      Val(k+1,j-1) + Val(k+1,j) + Val(k+1,j+1);
    }
  }

  return newMatrix;

  function Val(i, j)
  {
    if ((i<0) || (j<0) || (i>matrix.length-1) || (j>matrix.length-1)) {
      return 0;}
    return matrix[i][j] ? 1 : 0;
  }
}
