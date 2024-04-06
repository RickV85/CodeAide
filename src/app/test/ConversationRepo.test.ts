import { describe } from "@jest/globals";
import { ConversationRepo } from "../classes/ConversationRepo";
import convHistory from "./testData/conversationHistory.json";

describe("ConversationRepo", () => {
  let convRepo: any;
  beforeEach(() => {
    convRepo = new ConversationRepo(convHistory);
  });

  test("it should be an instance of ConversationRepo", () => {
    expect(convRepo).toBeInstanceOf(ConversationRepo);
  });
});
