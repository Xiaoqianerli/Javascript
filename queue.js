function Stack() {
    this.stacklist = [];
}
Stack.prototype.pushStack = function (node) {
    this.stacklist.push(node);
}
Stack.prototype.popStack = function () {
    return this.stacklist.pop();
}
Stack.prototype.size = function () {
    return this.stacklist.length;
}


function Queue() {
    this.queuelistExtend = new Stack();
    this.queuelist = this.queuelistExtend.stacklist;
    this.newQueuelistExtend = new Stack();
    this.newQueuelist = this.newQueuelistExtend.stacklist;
}
Queue.prototype.enterQueue = function (node) {
    this.queuelistExtend.pushStack(node);
}
Queue.prototype.outQueue = function () {
    let size = this.queuelistExtend.size();

    while (size > 0) {
        const node = this.queuelistExtend.popStack()
        this.newQueuelistExtend.pushStack(node)
        size--
    }
    this.newQueuelistExtend.popStack();

    size = this.newQueuelistExtend.size();
    while (size > 0) {
        const node = this.newQueuelistExtend.popStack()
        this.queuelistExtend.pushStack(node)
        size--
    }

    return this.queuelist;
}

let a = new Queue();
a.enterQueue('1');
a.enterQueue('2');
a.enterQueue('3');
a.outQueue();

console.log(a.queuelist)


