const { ListNode } = require("../list");

const { isListPalindrome } = require("./index");

const cases = require("./cases");

describe("isListPalindrome", () => {
  it("should return true if the linked list is a palindrome and false if it is not", () => {
    cases.forEach(el => {
      let arr = el.arr;
      let output = el.output;
      let l = new ListNode(arr[0]);
      for (let i = 1; i < arr.length; i++) {
        l.append(arr[i]);
      }
      expect(isListPalindrome(l)).toBe(output);
    });
  });
});
