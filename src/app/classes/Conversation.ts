import { Message } from "./Message";

export class Conversation {
  id: string;
  date: Date;
  messages: Message[];
  constructor(id: string, date: string, messages: Message[]) {
    this.id = id;
    this.date = new Date(date);
    this.messages = messages;
  }
}
