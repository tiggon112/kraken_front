import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';

const CoinExplorer = () => {
  const router = useRouter();

  const [coinData, setCoinData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`/api/coin/${router.query.coin_name}`);
      console.log(response.data.data);
      setCoinData(response.data.data);
      console.log(coinData);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div className="pt-10">
        <div className="grid gap-4">
          <div className="mx-5 flex justify-between"></div>
          <div className="px-4">
            <CustomCard className="w-full">
              <div></div>
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  );
};

CoinExplorer.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default CoinExplorer;
