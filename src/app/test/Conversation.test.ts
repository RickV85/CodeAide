import { describe, test, expect, beforeEach } from "@jest/globals";
import { Message } from "../classes/Message";
import { Conversation } from "../classes/Conversation";
import { testConvData } from "./testConvData";
import exp from "constants";

describe("Conversation", () => {
  let convo: any;
  let unSortedConvo: any;
  beforeEach(() => {
    convo = new Conversation(testConvData);
    unSortedConvo = new Conversation([
      {
        id: "WlKEEwa",
        createdAt: "2024-04-06T14:55:34.063Z",
        content:
          "To build a binary search function in JavaScript with optimal time complexity, you must ensure that it operates on a sorted array. The time complexity of an efficient binary search algorithm is O(log n), which means the time taken to search the element is proportional to the logarithm of the number of elements in the array.\n\nHere are some key steps to keep in mind to optimize your binary search implementation:\n\n1. Ensure that the input array is sorted before performing the binary search. A binary search will only work correctly on a sorted array.\n2. Implement recursive or iterative approaches for performing the binary search.\n3. Use proper termination conditions to stop searching once the element is found or if it's not present in the array.\n4. Determine whether you need to return just the index of the found element or another type of output.\n  \nRemember, binary search assumes a sorted array and requires additional space proportional to the height of the recursion call stack.\n\nFor reference implementations and detailed explanations, consider checking these resources:\n- MDN Web Docs on Binary Search: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf\n- GeeksforGeeks Binary Search Guide: https://www.geeksforgeeks.org/binary-search/\n  \nFeel free to attempt writing your code based on these guidelines, and I can provide feedback and guidance as needed!",
        role: "assistant",
      },
      {
        content:
          "How would I construct a binary search in JavaScript that has optimal space and time complexity?",
        role: "user",
        createdAt: "2024-04-06T14:55:32.357Z",
        id: "ccX9756",
      },
    ]);
  });

  // constructor tests

  test("it should create instance of Conversation", () => {
    expect(convo).toBeInstanceOf(Conversation);
  });

  test("it should have an id created from the first message in messages", () => {
    const id = convo.id;
    expect(id).toBe("ccX9756");
  });

  test("it's id should be from the oldest message", () => {
    const id = unSortedConvo.id;
    expect(id).toBe("ccX9756");
  });

  test("it should have a date prop created from the first message in messages", () => {
    const date = convo.date;
    expect(date).toBeInstanceOf(Date);
    expect(date).toEqual(new Date("2024-04-06T14:55:32.357Z"));
  });

  test("it's date should be created from the oldest message", () => {
    const date = unSortedConvo.date;
    expect(date).toEqual(new Date("2024-04-06T14:55:32.357Z"));
  });

  test("it's messages should be instances of Message", () => {
    convo.messages.forEach((msg: any) => {
      expect(msg).toBeInstanceOf(Message);
    });
  });

  // method tests

  // test("it should have a method to initialize and sort Messages by date", () => {});

  test("it should have a method to format date for display", () => {
    const formattedDate = convo.formatCreatedDate();
    expect(formattedDate).toBe("4/6/24");
  });
});
