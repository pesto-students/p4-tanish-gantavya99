function createStack() {
    let items=[];

    function push(item){
        items.push(item);
    };

    function pop(){
        items.pop();
    };

    return{pop , push };
}

const stack = new createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);