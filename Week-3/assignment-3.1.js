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

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

function square(n){
    return n*n;
}

const sqrM=memoize(square);
time(()=> sqrM(4));
time(()=> sqrM(4));
time(()=> sqrM(4));
time(()=> sqrM(4));

