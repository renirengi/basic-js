import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  /*let members=arguments[0].filter(element => typeof element === 'string');
  let arr=[];
  
  for(let i=0; i<members.length; i++){
    members[i] = members[i].replace(/ /g, '');
    console.log(members[i]);
    arr.push(members[i][0].toUpperCase());
  }

   if(arr.length===0){
   return false;
   }
   return arr.sort().join('');*/
}

