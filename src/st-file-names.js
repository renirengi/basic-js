import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(/* names */) {

  let name= arguments[0];
let array=[];
let buf="";
for (let i=0;i<name.length;i++){
  if(array.includes(name[i])){
    buf=name[i]+"(1)";
      if(array.includes(buf)){
      buf=buf+"(1)";
        if(array.includes(buf)){
         array.push(name[i]+"(2)")
         buf=""
        }
        else{
        array.push(buf);
        buf="";
        }
        }
      array.push(buf);
      buf="";

}
else{
  array.push(name[i]);
}
}
return array.filter(arr=>arr!=="");
}
