

function createIncrement() {
    let count=0; //  Count is initialized as 0

    //count=count+1
    function increment() {
        count++;
    }

    let message=`Count is ${count}`; 
   
    
    function log() {
        console.log(message);
    }

   
    return[increment,log];
};

const[increment,log] =createIncrement();

increment(); // Incrementing
increment();
increment();
log(); 

// The output will be - Count is 0

// Why? - 
// When we increment count we are assigning to the variable a new instance of a number with the value 1. message is still pointing to the old instance (value, in this case it's the same), so the log is going to print the same old value which is 0.

