export interface Message {
  role: string;
  content: string;
}

export interface MessageHistory {
  messages: Message[];
}
