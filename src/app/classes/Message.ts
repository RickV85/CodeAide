export class Message {
  content: string;
  createdAt: Date;
  id: string;
  role: "assistant" | "user";
  constructor(object: {
    content: string;
    createdAt: string;
    id: string;
    role: "assistant" | "user";
  }) {
    this.content = object.content;
    this.createdAt = new Date(object.createdAt);
    this.id = object.id;
    this.role = object.role;
  }
}
