import { describe, test, expect, beforeEach } from "@jest/globals";
import { Message } from "../classes/Message";

describe("Message", () => {
  let message: any;
  beforeEach(() => {
    message = new Message({
      content: "hi",
      createdAt: "2024-04-05T20:13:02.017Z",
      id: "VjHM9ld",
      role: "user",
    });
  });

  test("it should create a Message instance", () => {
    expect(message).toBeInstanceOf(Message);
  });

  test("its date prop should be formatted to locale", () => {
    expect(message.createdAt).toBeInstanceOf(Date);
  });
});
