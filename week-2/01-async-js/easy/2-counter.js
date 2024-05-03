/* ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

 */


let cnt=0;

let Counter=()=>{
    console.log(cnt);
    cnt++;
    setTimeout(Counter,1000);
};

Counter()