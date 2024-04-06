export class Message {
  content: string;
  createdAt: Date;
  id: string;
  role: string;
  constructor(object: Message) {
    this.content = object.content;
    this.createdAt = object.createdAt;
    this.id = object.id;
    this.role = object.role;
  }
}
