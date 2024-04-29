/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/



function isAnagram(str1,str2){

  //removing whitespaces from strings

  str1=str1.replace(/\s/g, "");
  str2=str2.replace(/\s/g, "");

  //dealing with edge cases

  if(str1.length==0&&str1.length)
    return true;

  if(str1.length!=str2.length)
    return false

  //converting strings to lowercase

  str1=str1.toLowerCase();
  str2=str2.toLowerCase();

  console.log(str1);

  //iterating through the first string to check presence in the second string

  for(let i=0;i<str1.length;i++){
    if(str2.indexOf(str1[i])===-1){
      return false;
    }
  }

  return true;

}

console.log(isAnagram("Debit Card","Bad Credit"));