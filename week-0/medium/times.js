/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/



function times(n){

    //creating a date variable that contains time in millisecs passed from 1970 to current time before loop exec

    let d1=Date.now()
    d1/=1000;
    let sum=0;

    for(let i=1;i<=n;i++){
        sum+=i;
    }

    //storing time after loop execution

    let d2=Date.now()
    d2/=1000;

    return d2-d1;
}

console.log(`Time require to calculate sum from 1-100 : ${times(100)}`);
console.log(`Time require to calculate sum from 1-100000 : ${times(100000)}`);
console.log(`Time require to calculate sum from 1-1000000000 : ${times(1000000000)}`);