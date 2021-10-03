import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(/* n */) {
  let number=arguments[0];
  let sum=0;
  let result;
  let string=number.toString();
  let array= string.split('');
   for( let i=0; i<array.length; i++){
     sum=sum+Number(array[i]);
   }
   if(sum>9){
     result=getSumOfDigits(sum);
   }
   else{
     result=sum;
   }  
   
  return result;  
}
