import { describe } from "@jest/globals";
import { ConversationRepo } from "../classes/ConversationRepo";
import jsonTestData from "./testData/conversationHistory.json";
import { Conversation } from "../classes/Conversation";
import { ChatHistory } from "../classes/ConversationRepo";
const convHistory: ChatHistory = jsonTestData as ChatHistory;

describe("ConversationRepo", () => {
  let convRepo: any;
  beforeEach(() => {
    convRepo = new ConversationRepo(convHistory);
  });

  test("it should be an instance of ConversationRepo", () => {
    expect(convRepo).toBeInstanceOf(ConversationRepo);
  });

  test("it should create instances of Conversations", () => {
    convRepo.conversations.forEach((conv: any) => {
      expect(conv).toBeInstanceOf(Conversation);
    });
  });

  test("it should sort conversations from newest to oldest", () => {
    const firstDate = convRepo.conversations[0].date;
    const lastDate = convRepo.conversations[3].date;
    expect(firstDate > lastDate).toBe(true);
  });

  // methods

  test("it should have a method to find and return a conversation by id", () => {
    const foundConv = convRepo.findConvById("T4NKgvK");
    expect(foundConv).toEqual(convRepo.conversations[2]);
  });

  test("it should return null if no conversation found with id", () => {
    const foundConv = convRepo.findConvById("nonvalidid");
    expect(foundConv).toEqual(null);
  });

  test("it should have a method to remove a conversation by id", () => {
    convRepo.removeConvById("T4NKgvK");
    const newRepoIds = convRepo.conversations.map(
      (conv: Conversation) => conv.id
    );

    expect(newRepoIds.includes("T4NKgvK")).toBe(false);
  });
});
