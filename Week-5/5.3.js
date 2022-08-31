function hasDuplicate(array){
    const checkSet = new Set();
    for(let i =0 ; i < array.length ; i++){
        checkSet.add(array[i]);
    }
    if(checkSet.size === array.length){
        console.log("The array does not contain any duplicate values.")
        return false;
    }
    else{
        console.log("The array does contain duplicate values.")
        return true;
    }   
}