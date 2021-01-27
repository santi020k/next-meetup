// Libs
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const baseUrl = 'https://test-api.co'
const requestOpportunity = 'opportunities/search'

const baseParams = {
  currency: 'USD',
  page: '0',
  periodicity: 'hourly',
  lang: 'en',
  size: '20',
  aggregate: 'false',
  offset: '0'
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {
    query
  } = req
  const { type, ...restQuery } = query
  const params = { ...baseParams, ...restQuery }
  const paramsURL = new URLSearchParams(params).toString()

  await axios.post(`${baseUrl}/${requestOpportunity}?${paramsURL}`, null, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => {
    res.statusCode = 200
    res.json(response?.data)
  })
}
