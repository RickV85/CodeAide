import { Message } from "./Message";

export class Conversation {
  id: string | null;
  date: Date | null;
  messages: Message[];
  constructor(
    messages: {
      content: string;
      role: string;
      createdAt: string;
      id: string;
    }[]
  ) {
    this.id = null;
    this.date = null;
    this.messages = this.initializeMessages(messages);
  }

  initializeMessages(
    messages: {
      content: string;
      role: string;
      createdAt: string;
      id: string;
    }[]
  ) {
    const msgArr = messages.map((msg) => new Message(msg));
    msgArr.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return -1;
      } else {
        return 1;
      }
    });

    this.id = msgArr[0].id;
    this.date = new Date(msgArr[0].createdAt);

    return msgArr;
  }

  formatCreatedDate() {
    if (this.date) {
      const formattedDate = this.date.toLocaleDateString("en-us", {
        day: "numeric",
        month: "numeric",
        year: "2-digit",
      });
      return formattedDate;
    } else {
      return null;
    }
  }
}
