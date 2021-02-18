const handler = (req, res) => {
  const headline = pickRandom(headlines)
  const timestamp = new Date().toLocaleString()

  res.status(200).json({ content: { headline, timestamp } })
}

const headlines = [
  'Ketch and Kill.',
  'Ketch me if you can.',
  'Ketch of the day.',
  'Ketch up!',
  'Ketch-22',
  'Quite a fetching ketch.',
  'This is so ketch.',
  "Get in loser. We're going sailing.",
  "Let's play ketch.",
  "We're doing boat stuff."
]

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default handler
