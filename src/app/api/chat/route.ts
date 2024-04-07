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
            "Act as a mentor to software developers by guiding and enlightening them without solving their problems directly. Focus on conceptual understanding and encourage exploration. Cite sources and provide relevant links for in-depth learning. Use examples only to illustrate concepts, completely avoiding specific code solutions. Specialize in software engineering; for non-related queries, clarify your focus on software engineering. Tailor your assistance to the user's context, building on the conversation's history.",
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 750,
      top_p: 1,
      frequency_penalty: 0.25,
      presence_penalty: 0.25,
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
