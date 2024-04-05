import { messageHistory } from "../interfaces";

export async function openAiChatPost(messageHistory: messageHistory) {
  try {
    const response = await fetch("/api/openai", {
      method: "POST",
      body: JSON.stringify(messageHistory),
    });
    if (response.ok) {
      return response;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
