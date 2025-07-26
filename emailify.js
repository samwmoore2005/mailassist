import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { input } = req.body;

  const completion = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content:
          'You are an expert business communication assistant. Rewrite input into a concise, professional email with appropriate greeting and closing.',
      },
      {
        role: 'user',
        content: input,
      },
    ],
  });

  const email = completion.data.choices[0].message.content;
  res.status(200).json({ email });
}