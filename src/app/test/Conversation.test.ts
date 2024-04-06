import { describe, test, expect, beforeEach } from "@jest/globals";
import { Message } from "../classes/Message";
import { Conversation } from "../classes/Conversation";
import { testConvData } from "./testData/testConvData";
import { unsortedConvData } from "./testData/testUnsortedConvData";

describe("Conversation", () => {
  let convo: any;
  let unSortedConvo: any;
  beforeEach(() => {
    convo = new Conversation(testConvData);
    unSortedConvo = new Conversation(unsortedConvData);
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

  test("it should have a method to format date for display", () => {
    const formattedDate = convo.formatCreatedDate();
    expect(formattedDate).toBe("4/6/24");
  });

  test("it should have a method to create a max 50 char intro string of first message", () => {
    const intro = convo.createIntro();
    expect(intro).toBe("How would I construct a binary search in JavaScrip...");

    const shortIntro = "What is a method?";
    expect(shortIntro).toBe("What is a method?");
  });
});
