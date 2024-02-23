import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';
import TableComponent from '@/components/main/Table';
import { Percent } from '@/components/SVG/Percent';
import type { NextPageWithLayout } from '@/pages/_app';

const Reward: NextPageWithLayout = () => {
  const [watchListData, setWatchListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('/api/coin?count=5');
      setWatchListData(
        response.data.data.map((row: any) => ({ isActive: true, ...row })),
      );
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full max-w-[46rem] flex-col gap-y-4 p-8">
      <h1 className="mb-6 text-4xl font-bold text-purple">Reward</h1>
      <CustomCard>
        <Link className="flex items-center gap-x-4 p-4 " href={'/c/rewards'}>
          <div className="flex h-fit w-fit rounded-full bg-custom-grey p-1">
            <Percent />
          </div>
          <div className="flex w-full flex-col">
            <p className="leading-5">{"You're ready to earn"}</p>
            <p className="text-sm leading-5 text-darkgrey">
              {'Explore earning assets'}
            </p>
          </div>
          <span className="text-2xl font-medium text-purple">{'>'}</span>
        </Link>
      </CustomCard>
      <CustomCard className="px-8 py-6">
        <TableComponent
          tableData={watchListData}
          periods={[]}
          title={'Watchlist'}
          isWatchList={true}
        />
      </CustomCard>
    </div>
  );
};

Reward.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Reward;
