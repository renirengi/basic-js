import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(/* email */) {
  let email=arguments[0];
  let result;
 for(let i=email.length-1; i>=0;i--){
   if(email[i-1]==="@"){
     result=email.slice(i);
     break;
   }
 }
 return result;
}
