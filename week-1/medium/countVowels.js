/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str){
  //creating a ascii vowel dictionary

  let vowel=[97,101,105,111,117];
  let cnt=0;

  //creating uniform case
  str=str.toLowerCase();

  //iterating thriugh string to check for vowel
  for(let i=0;i<str.length;i++){
    if(vowel.includes(str[i].charCodeAt(0)))
      cnt+=1;
  }

  return cnt;
}
