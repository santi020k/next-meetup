// Libs
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const baseUrl = 'https://test-api.com/api'
const request = 'bios'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {
    query: { username }
  } = req

  await axios.post(`${baseUrl}/${request}/${username.toString()}`, null, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => {
    res.statusCode = 200
    res.json(response?.data)
  })
}
