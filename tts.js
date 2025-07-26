export default async function handler(req, res) {
  const { text } = req.body;

  // Placeholder for real TTS service (e.g., ElevenLabs)
  res.status(501).json({ error: 'TTS not yet implemented.' });
}