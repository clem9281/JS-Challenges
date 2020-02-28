const { ListNode } = require("../list");

const { mergeTwoLinkedLists } = require("./index");

const cases = require("./cases");

describe("mergeTwoLinkedLists should return the the two lists merged together", () => {
  cases.forEach((el, i) => {
    let a = el.a;
    let b = el.b;
    let output = el.output;
    let aList = a.length ? new ListNode(a[0]) : null;
    let bList = b.length ? new ListNode(b[0]) : null;
    for (let i = 1; i < a.length; i++) {
      aList.append(a[i]);
    }
    for (let i = 1; i < b.length; i++) {
      bList.append(b[i]);
    }
    it(`should run case#: ${i + 1}`, () => {
      expect(
        ListNode.prototype.asArray(mergeTwoLinkedLists(aList, bList))
      ).toEqual(output);
    });
  });
});
