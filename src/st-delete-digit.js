import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(/* n */) {
  let n=arguments[0];
  let max =0;   
  let arr= n.toString().split('');
 
  for(let i=0; i<arr.length; i++){
   let a=arr.slice();
    a.splice(i,1);
   let str=a.join('');
    if(Number(str)>max){
    max=Number(str);
  }
}
return max;
}
