// pages/api/velog.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://v2.velog.io/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })

  const data = await response.json()
  res.status(200).json(data)
}