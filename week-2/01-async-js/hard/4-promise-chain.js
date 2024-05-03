/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


function func1(t){
    return new Promise((res,err)=>{
        setTimeout(()=>{
            res();
        },t*1000)
    })
}

function func2(t){
    return new Promise((res,err)=>{
        setTimeout(()=>{
            res();
        },t*1000)
    })
}

function func3(t){
    return new Promise((res,err)=>{
        setTimeout(()=>{
            res();
        },t*1000)
    })
}

function calculateTime(){

    let d1=Date.now();

    return func1(t1).then((res)=>{
        return func2(t2);
    }).then((res)=>{
        return func3(t3);
    }).then((res)=>{
        let d2=Date.now();
        return d2-d1;
    })
}