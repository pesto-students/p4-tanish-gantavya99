//rotate a linked list
class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
}
var rotateRight = function (head, k) {
    if (k === 0 || !head || !head.next) 
    return head;
  
    let slow = head;
    let fast = head;
    let len = 1;
  
    while (fast.next) {
      fast = fast.next;
      len++;
    }
    k %= len;
    let i = len - k;
  
    while (i) {
      i--;
      fast.next = slow;
      fast = fast.next;
      slow = slow.next || slow;
      fast.next = null;
    }
    return slow;
  };