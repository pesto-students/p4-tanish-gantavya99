//next greater element
function greater(arr){
    let result=[];
 for(let i=0;i<arr.length;i++)
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]>arr[i])
        result.push(arr[j]);
        else
        result.push(-1);
    }
    return result;
}
console.log(greater([3,2,3,4]));
