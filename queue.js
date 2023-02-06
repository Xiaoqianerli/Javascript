function Stack() {
    this.stacklist = [];
}
Stack.prototype.pushStack = function (node) {
    this.stacklist.push(node)
}
Stack.prototype.popStack = function () {
    this.stacklist.pop()
}


function Queue() {
    this.queuelistExtend = new Stack();
    this.queuelist = this.queuelistExtend.stacklist;
}
Queue.prototype.enterQueue = function (node) {
    this.queuelistExtend.pushStack(node);
}
Queue.prototype.outQueue = function () {
    this.queuelist.reverse();
    this.queuelistExtend.popStack();
    this.queuelist.reverse();
}

let a = new Queue();
a.enterQueue('1');
a.enterQueue('2');
a.enterQueue('3');
a.outQueue();

console.log(a.queuelist)

// let newQueue = new Stack();
// newQueue.pushStack('a');
// newQueue.pushStack('b');
// newQueue.pushStack('c');
// newQueue.popStack();
// console.log(newQueue);
