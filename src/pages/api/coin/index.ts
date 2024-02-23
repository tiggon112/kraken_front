import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { count = 100, page = 1 }: any = req.query;
  const start = (page - 1) * count;
  const end = start + count;
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&locale=en`,
  );
  res.status(200).json({
    message: 'Hello from Next.js!',
    data: response.data.slice(start, end),
  });
}
