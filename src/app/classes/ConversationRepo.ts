import { Conversation } from "./Conversation";

interface ConvHistory {
  [id: string]: {
    content: string;
    role: string;
    createdAt: string;
    id: string;
  }[];
}

export class ConversationRepo {
  conversations: Conversation[];
  constructor(data: ConvHistory) {
    this.conversations = this.initializeConversations(data);
  }

  initializeConversations(data: ConvHistory) {
    const convKeys = Object.keys(data);
    const conversations = convKeys.map((key) => new Conversation(data[key]));
    return conversations;
  }
}
