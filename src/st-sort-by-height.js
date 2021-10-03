import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(/* arr */) {
  let arr=arguments[0];
  for(var i=0; i<arr.length-1; i++){
      for(var k=0;k<arr.length-1;k++){
        if (arr[k] === -1) continue;

        for(var next=k+1;next<arr.length;next++){
            if (arr[next]!==-1)
            {
                if(arr[k]>arr[next]){
                    [arr[k],arr[next]]=[arr[next],arr[k]];
                }
                break;
            }
        }          
      }
  }
  return arr;
}
