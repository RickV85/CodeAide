import { describe, test, expect, beforeEach } from "@jest/globals";
import { Message } from "../classes/Message";
import { Conversation } from "../classes/Conversation";
import { testConvData } from "./testConvData";

describe("Conversation", () => {
  let convo: any;
  beforeEach(() => {
    convo = new Conversation(testConvData);
  });

  test("it should create instance of Conversation", () => {
    expect(convo).toBeInstanceOf(Conversation);
  });

  test("its messages should be instances of Message", () => {
    convo.messages.forEach((msg: any) => {
      expect(msg).toBeInstanceOf(Message);
    });
  });
});
