import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Fallback (no chat bot) – always return a friendly message.
  return NextResponse.json({ message: "Chatbot is currently unavailable. Please contact us via the contact form." });
} 