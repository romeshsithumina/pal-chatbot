import { createMessage } from "@/lib/actions/message.action";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
import OpenAI from "openai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("\n\n---------------", body);

    const { messages, conversationId } = body;
    console.log("conversation id: ", conversationId);

    // Ask OpenAI for a streaming chat completion given the prompt
    console.log("\nmessages", messages);
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "system",
          content: `Hi! I'm Pal, your friendly chatbot. How can I help you today?`,
        },
        ...messages,
      ],
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response, {
      async onStart() {
        // This callback is called when the stream starts
        // You can use this to save the prompt to your database

        const userPrompt = messages[messages.length - 1].content;
        await createMessage({
          conversationId,
          role: "user",
          content: userPrompt,
        });
      },

      async onFinal(completion: string) {
        // This callback is called when the stream completes
        // You can use this to save the final completion to your database
        console.log("\ncompletion", completion);

        await createMessage({
          conversationId,
          role: "assistant",
          content: completion,
        });
      },
    });

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    // Check if the error is an APIError
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error;
      return NextResponse.json({ name, status, headers, message }, { status });
    } else {
      throw error;
    }
  }
}
