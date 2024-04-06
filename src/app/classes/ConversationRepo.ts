import { Conversation } from "./Conversation";

export class ConversationRepo {
  conversations: Conversation[];
  constructor(jsonData: string) {
    this.conversations = this.initializeConversations(jsonData);
  }

  initializeConversations(json: string) {
    const parsedConversations = JSON.parse(json).map(
      (
        conv: {
          content: string;
          role: string;
          createdAt: string;
          id: string;
        }[]
      ) => new Conversation(conv)
    );
    return parsedConversations;
  }
}
