export class Message {
  content: string;
  createdAt: Date;
  id: string;
  role: string;
  constructor(object: {
    content: string;
    createdAt: string;
    id: string;
    role: string;
  }) {
    this.content = object.content;
    this.createdAt = new Date(object.createdAt);
    this.id = object.id;
    this.role = object.role;
  }
}
