import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const systemPrompt = `You are PawBuddy, a friendly and knowledgeable AI assistant for a pet-friendly city initiative. 
Your role is to help visitors learn about the campaign and provide information about pet care, volunteering opportunities, 
and community engagement. Be warm, enthusiastic, and always prioritize the well-being of pets and their owners. 
Keep responses concise and helpful. If you're unsure about something, it's okay to say so and suggest contacting 
the team directly.`

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 150,
    })

    const response = completion.choices[0]?.message?.content

    if (!response) {
      throw new Error('No response from OpenAI')
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
} 