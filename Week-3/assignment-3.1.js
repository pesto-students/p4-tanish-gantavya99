//this is the memoize function 
function memoize(fn){
    const cache=new Map();
    return function(...args){
        const key=args.toString();
        if(cache.has(key)){
        return cache.get(key);
    }
    cache.set(key,fn(...args));
    return cache.get(key);
    };
}
// Function to calculate time taken by the code when executed 
function time(fn){
    console.time();
    fn();
    console.timeEnd();
}
// a simple function to make a square of a number
function square(n){
    return n*n;
}
// calling the functions here
const sqrM=memoize(square);
time(()=> sqrM(4));
time(()=> sqrM(4));
time(()=> sqrM(4));
time(()=> sqrM(4));

