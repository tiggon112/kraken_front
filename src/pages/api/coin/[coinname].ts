import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  data: any;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false',
  );
  res.status(200).json({ message: 'Hello from Next.js!', data: response.data });
}
