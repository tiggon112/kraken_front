import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';
import { formatNumber } from '@/utils/Stringfy';

const CoinExplorer = () => {
  const router = useRouter();

  const [coinData, setCoinData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`/api/coin/${router.query.coin_name}`);
      setCoinData(response.data.data);
      console.log(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div className="pt-10">
        <div className="grid gap-4">
          <div className="mx-5 flex justify-between">
            <div className="flex items-center gap-4">
              <img
                alt="icon"
                className="h-14 w-14"
                src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400"
              />
              <div className="flex flex-col justify-around">
                <span className="text-4xl font-bold leading-[3rem]">
                  {coinData.name}
                </span>
                <span className=" text-2xl font-medium leading-8 text-grey">
                  {coinData.symbol?.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
          <div className="px-4">
            <CustomCard className="w-full px-7 py-6">
              <div className="flex flex-col">
                <p>Price</p>
                <div className="flex items-baseline">
                  <span className="text-4xl leading-12 text-darkgrey">$</span>
                  <span className="text-4xl font-medium leading-12">
                    {coinData.market_data
                      ? formatNumber(coinData.market_data?.current_price.usd)
                      : ''}
                  </span>
                  <span className="font-medium">
                    {coinData.market_data
                      ? formatNumber(coinData.market_data?.price_change_24h)
                      : ''}
                  </span>
                </div>
              </div>
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  );
};

CoinExplorer.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default CoinExplorer;
