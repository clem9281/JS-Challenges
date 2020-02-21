const { ListNode } = require("../list");

const { removeKFromList } = require("./index");

const cases = require("./cases");

describe("removeKFromList", () => {
  it("should return the linked list with the ks removed", () => {
    cases.forEach((el, index) => {
      let arr = el.arr;
      let output = el.output;
      let k = el.k;
      let l = null;
      if (arr.length > 0) {
        l = new ListNode(arr[0]);
        for (let i = 1; i < arr.length; i++) {
          l.append(arr[i]);
        }
      }
      expect(ListNode.prototype.asArray(removeKFromList(l, k))).toEqual(output);
    });
  });
  it("should handle long cases CASE8", () => {
    let test8In = require("./test-8-input.json");
    let test8Out = require("./test-8-output.json");
    let k8 = 798;
    expect(ListNode.prototype.asArray(removeKFromList(test8In, k8))).toEqual(
      test8Out
    );
  });
  //   it("should handle long cases CASE9", () => {
  //     let test8In = require("./test-8-input.json");
  //     let test8Out = require("./test-8-output.json");
  //     let k8 = 798;
  //     expect(ListNode.prototype.asArray(removeKFromList(test8In, k8))).toEqual(
  //       test8Out
  //     );
  //   });
});
