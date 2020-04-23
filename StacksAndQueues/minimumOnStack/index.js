function minimumOnStack(operations) {
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  function Stack(head = null) {
    this.head = head;
    this.size = !head ? 0 : 1;
    // keep an array of minimums so when we pop off the smallest we know what the next smallest is
    this.minArr = [];
  }
  Stack.prototype.push = function (value) {
    const newNode = new Node(value);
    if (
      value <= this.minArr[this.minArr.length - 1] ||
      this.minArr.length === 0
    ) {
      this.minArr.push(value);
    }
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  };
  Stack.prototype.pop = function () {
    let oldValue = null;
    if (this.head !== null) {
      oldValue = this.head.value;
      this.head = this.head.next;
      this.size--;
    }
    if (oldValue === this.minArr[this.minArr.length - 1]) {
      this.minArr.pop();
    }
    return oldValue;
  };
  Stack.prototype.getMin = function () {
    return this.minArr[this.minArr.length - 1];
  };

  const pushReg = /push/i;
  const popReg = /pop/i;
  const minReg = /min/i;
  const stack = new Stack();
  const answer = [];
  for (let operation of operations) {
    if (pushReg.test(operation)) {
      let operand = parseInt(operation.split(" ")[1]);
      stack.push(operand);
    } else if (popReg.test(operation)) {
      stack.pop();
    } else if (minReg.test(operation)) {
      answer.push(stack.getMin());
    }
  }
  return answer;
}

module.exports = { minimumOnStack };
