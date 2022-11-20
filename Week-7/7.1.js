//defining node class
class Node{
    constructor(val){
        this.data=val;
        this.next=null;

    }
}
//reverse function
function reverse(node){
    var prev=null;
    var current=node;
    var next=null;
    while(current!=null){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    node=prev;
    return node;
}
//function to print the linked list
function printList(node) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}

//defining a linked list
    var head = new Node(85);
        head.next = new Node(15);
        head.next.next = new Node(4);
        head.next.next.next = new Node(20);
        head=reverse(head);
        printList(head);