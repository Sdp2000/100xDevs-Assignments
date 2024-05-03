/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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

function totalTime(t1,t2,t3){
    let d1=Date.now();

    return Promise.all([func1(t1),func2(t2),func(t3)]).then((res)=>{
        let d2=Date.now();
        return d2-d1;
    })
}