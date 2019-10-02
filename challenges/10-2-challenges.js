/***
 *
 * * Javascript Arrays
 *   The first item in the array should be a "string"
 *   The second item in the array should be a function
 *   The third item in the array should be an array
 *   @example
 *   typeof [0] // "string"
 *   typeof [1] // "function"
 *   Array.isArray([2])  // "array"
 *
 *
 *  */

function createAnArray() {
  let array = ["Hello World!",
  function f1(x, y, z){
    return x + y * z;
  },
  [52, 26, 18]];
  
  return array;
}

/***
 *   The function will accept two arguments: the string and the target.
 *   Uppercase the target word in the string.
 *   If the target exceeds the length of the string, return undefined.
 *
 *
 *   hint
 *   use the Split method
 *
 *   @example
 *   uppercaseTargetWord("first second third", 2) // returns "first SECOND third"
 *   uppercaseTargetWord("Javascript is cool", 3) // returns "Javascript is COOL"
 *   uppercaseTargetWord("Javascript is not cool", 5) // returns undefined
 *
 *
 *
 *  */

function uppercaseTargetWord(str, target) {
  let outstr = str.split(" ");
  if (target > outstr.length){
    return undefined;
  }
  for (let i = 0; i < outstr.length; i++){
    if (i === target - 1){
      outstr[i] = outstr[i].toUpperCase();
    }
  }
  outstr = outstr.join(" ");
  return outstr;
}

module.exports = {
  createAnArray,
  uppercaseTargetWord
};
