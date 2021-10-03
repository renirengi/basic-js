import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(/* n */) {
  let n=arguments[0];
  if(n.length!==17){
    return false;
  }
  for(let i=0; i<n.length; i++){
    if((i===2)||(i===5)||(i===8)||(i===11)||(i===14)){
      if(n[i]!=="-"){
        return false;
      }
      continue;
    }

    if ((n[i]<="F") && (n[i]>="A")){
      continue;
    }
    else
    if ((n[i]>=0) && (n[i]<=9)){
      continue;
    }

    return false;
  }
  return true;
}
