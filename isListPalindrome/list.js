function ListNode(value) {
  this.value = value;
  this.next = null;
}

ListNode.prototype.append = function(value) {
  const newNode = new ListNode(value);
  this.next = newNode;
};

ListNode.prototype.asArray = function() {
  let current = this;
  const arr = [];
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
};

module.exports = { ListNode };
