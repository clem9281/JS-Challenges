const { ListNode } = require("../list");

const { addTwoHugeNumbers } = require("./index");

const cases = require("./cases");

describe("addTwoHugeNumbers", () => {
  it("should return the sum of the two linked lists in a linked list format", () => {
    cases.forEach(el => {
      let a = el.a;
      let b = el.b;
      let output = el.output;
      let aList = new ListNode(a[0]);
      let bList = new ListNode(b[0]);
      for (let i = 1; i < a.length; i++) {
        aList.append(a[i]);
      }
      for (let i = 1; i < b.length; i++) {
        bList.append(b[i]);
      }
      expect(
        ListNode.prototype.asArray(addTwoHugeNumbers(aList, bList))
      ).toEqual(output);
    });
  });
});
