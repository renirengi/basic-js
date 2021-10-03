import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(/* str */) {
  let str=arguments[0];
  let result="";  
  let arr=str.split("");
  
  for(let i=0; i<arr.length; ){
      let counter = 1;

      for(let next=i+1; next<arr.length; next++){
        if (arr[next]!==arr[i]){
          break
        }
        counter++;
      }

      if (counter == 1)
          result += arr[i];
        else
          result += counter + arr[i];

      i+=counter;
  }
  return result;
}
