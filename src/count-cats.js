import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */



export default function countCats(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return arr.reduce((acc, ar)=> {
    const num = ar.reduce((ac, item)=> item === '^^'? ac +=1 : ac,0)
    return acc+=num
},0)
}
