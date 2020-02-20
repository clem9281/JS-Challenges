const { ListNode } = require("../list");

function removeKFromList(l, k) {
  let current = l;
  let prev = null;
  let count = 0;
  if (!current) {
    return current;
  }
  while (current && current.value === k) {
    if (count === 20) {
      break;
    }
    l = l.next;
    current = l;
    count++;
  }
  while (current) {
    // console.log(current.value);
    // if (count === 1000) {
    //   break;
    // }
    if (current.value === k) {
      // console.log("here");
      prev.next = current.next;
    }

    prev = current;

    current = current.next;
    count++;
  }
  return l;
}

// console.log("starting");
// const test9 = require("./test-9.json");
// console.log("test in");
// const case9 = { arr: test9.input.l, k: test9.input.k, output: test9.output };
// console.log("parsed");
// let arr = case9.arr;
// let output = case9.output;
// let k = case9.k;
// let l = null;
// if (arr.length > 0) {
//   l = new ListNode(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     l.append(arr[i]);
//   }
// }
// console.log("running");
// ListNode.prototype.asArray(removeKFromList(l, k));
// console.log("finished");

module.exports = { removeKFromList };
