export default async function handler(req, res) {
  try {
    const response = await fetch(
      'http://www.number-trivia.com/random/trivia?json'
    )

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }

    const data = await response.json()

    res.status(200).json(data)

  } catch (error) {
    res.status(502).json({
      error: error.message
    })
  }
}