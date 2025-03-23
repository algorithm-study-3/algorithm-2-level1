var MyQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.pushStack.length !== 0) {
    const x = this.pushStack.pop();
    this.popStack.push(x);
  }

  const result = this.popStack.pop();

  while (this.popStack.length !== 0) {
    const x = this.popStack.pop();
    this.pushStack.push(x);
  }

  return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.pushStack.length !== 0) {
    const x = this.pushStack.pop();
    this.popStack.push(x);
  }

  const result = this.popStack[this.popStack.length - 1];

  while (this.popStack.length !== 0) {
    const x = this.popStack.pop();
    this.pushStack.push(x);
  }

  return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.pushStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
