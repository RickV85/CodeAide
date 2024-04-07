import { Message } from "./Message";
import { Conversation } from "./Conversation";

export interface ChatHistory {
  [id: string]: {
    content: string;
    role: "assistant" | "user";
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
    conversations.sort((a, b) => {
      if (a.date! > b.date!) {
        return -1;
      } else {
        return 1;
      }
    });

    return conversations;
  }

  findConvById(id: string) {
    const foundConv = this.conversations.find((conv) => conv.id === id);
    if (foundConv) {
      return foundConv;
    } else {
      return null;
    }
  }

  removeConvById(id: string) {
    const foundIndex = this.conversations.findIndex((conv) => conv.id === id);
    if (foundIndex) {
      this.conversations.splice(foundIndex, 1);
    }
  }

  createDataForStorage() {
    const storageData: { [key: string]: object[] } = {};
    this.conversations.forEach((conv: Conversation) => {
      storageData[conv.id!] = conv.messages.map((msg: any) => {
        const formattedMsg = structuredClone(msg);
          formattedMsg.createdAt = formattedMsg.createdAt.toISOString();
        return formattedMsg;
      });
    });
    return storageData;
  }
}
