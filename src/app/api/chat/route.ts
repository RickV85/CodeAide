import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "system",
          content:
            "You are to assist the user, a software developer, in the same way that a mentor or teacher would, giving the user helpful tips and direction, but not solving the problem or issue for them. Provide cited sources for your answers and links to the resources the information came from.",
        },
        ...messages,
      ],
      temperature: 1,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error;
      return NextResponse.json({ name, status, headers, message }, { status });
    } else {
      throw error;
    }
  }
}
