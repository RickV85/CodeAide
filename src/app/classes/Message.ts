export class Message {
  content: string;
  createdAt: string;
  id: string;
  role: string;
  constructor(object: {
    content: string;
    createdAt: string;
    id: string;
    role: string;
  }) {
    this.content = object.content;
    this.createdAt = new Date(object.createdAt).toLocaleDateString("en-us", {
      day: "numeric",
      month: "numeric",
      year: "2-digit",
    });
    this.id = object.id;
    this.role = object.role;
  }
}
