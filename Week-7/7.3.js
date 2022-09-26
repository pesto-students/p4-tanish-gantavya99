//using HashSet
class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
}
var hasCycle = function(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) return true;
        set.add(head);
        head = head.next;
    }
    return false;
};
