/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/


function findLargestElement(input){

    //defining the max value with the least value possible
    let max=Number.MIN_SAFE_INTEGER;

    //checking edge cases

    if(input.length===0)
        return;

    //iterating through the array to get max element

    input.forEach((val)=>{
        if(val>max)
            max=val;
    });


    return max;

}