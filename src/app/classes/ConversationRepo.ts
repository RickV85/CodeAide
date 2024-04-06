import { Conversation } from "./Conversation";

interface ChatHistory {
  [id: string]: {
    content: string;
    role: string;
    createdAt: string;
    id: string;
  }[];
}

export class ConversationRepo {
  conversations: Conversation[];
  constructor(data: ChatHistory) {
    this.conversations = this.initializeConversations(data);
  }

  initializeConversations(data: ChatHistory) {
    const convKeys = Object.keys(data);
    const conversations = convKeys.map((key) => new Conversation(data[key]));
    return conversations;
  }
}
