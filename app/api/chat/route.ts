import { NextResponse } from 'next/server'
import OpenAI from 'openai'

// Log if API key is missing
if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is not set in environment variables')
}

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
      console.error('No message provided in request')
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is missing during request')
      return NextResponse.json(
        { error: 'Chat service is not properly configured' },
        { status: 500 }
      )
    }

    console.log('Sending request to OpenAI...')
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
      console.error('No response content from OpenAI')
      throw new Error('No response from OpenAI')
    }

    console.log('Successfully received response from OpenAI')
    return NextResponse.json({ message: response })
  } catch (error) {
    // Log detailed error information
    console.error('Chat API Error Details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      status: error.status,
      code: error.code
    })
    
    return NextResponse.json(
      { 
        error: 'Failed to process chat message',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
} 