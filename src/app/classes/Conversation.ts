import { Message } from "./Message";

export class Conversation {
  id: string;
  date: Date;
  messages: Message[];
  constructor(
    messages: {
      content: string;
      role: string;
      createdAt: string;
      id: string;
    }[]
  ) {
    this.id = messages[0].id;
    this.date = new Date(messages[0].createdAt);
    this.messages = messages.map((msg) => new Message(msg));
  }

  formatCreatedDate() {
    const formattedDate = this.date.toLocaleDateString("en-us", {
      day: "numeric",
      month: "numeric",
      year: "2-digit",
    });
    return formattedDate;
  }
}
