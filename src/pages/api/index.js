const handler = (req, res) => {
  const headline = pickRandom(headlines)
  const timestamp = new Date().toLocaleString()

  res.status(200).json({ content: { headline, timestamp } })
}

const headlines = [
  'This is so ketch.',
  "Get in loser. We're going sailing.",
  'Ketch me if you can.',
  'Ketch up!',
  'Ketch of the day.',
  "Let's play ketch.",
  "We're doing boat stuff.",
  'Quite a fetching ketch.'
]

const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)]

export default handler
