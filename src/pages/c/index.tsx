import {
  faArrowDown,
  faArrowUp,
  faLeftRight,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';
import TableComponent from '@/components/main/Table';
import { Percent } from '@/components/SVG/Percent';
import type { NextPageWithLayout } from '@/pages/_app';

const Home: NextPageWithLayout = () => {
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
      <h1 className="mb-6 text-4xl font-bold text-purple">
        Good evening, Legas
      </h1>
      <CustomCard className="w-full p-0 pb-8">
        <img
          src="/assets/images/bitcoin-cover.png"
          className="w-full rounded-2xl"
          alt="bitcoin"
        />
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="pt-4 text-center text-3xl font-medium">
            Get some Bitcoin!
          </span>
          <p className="max-w-[23rem] text-base">
            Start your Kraken journey by purchasing Bitcoin, the world&apos;s
            most popular cryptocurrency
          </p>
          <ARoundedPurple
            className="h-[2.75rem] p-1 px-4 !font-plexsans font-semibold"
            ifP={true}
            text="Buy Crypto"
          />
          <a
            href="#"
            className="mt-3 rounded-full p-3 px-6 font-semibold leading-6 text-purple hover:bg-purple/10"
          >
            <p>Explore all assets</p>
          </a>
        </div>
      </CustomCard>
      <CustomCard className="px-8 py-6">
        <div className="flex flex-col gap-y-12 ">
          <div className="flex flex-col">
            <span className=" text-darkgrey">Portfolio value</span>
            <div className="box-border whitespace-nowrap text-3xl font-medium">
              <span className="text-darkgrey">$</span>
              <span>0.00</span>
            </div>
          </div>
          <div className="flex w-full cursor-pointer justify-center">
            <div className="flex gap-4 pr-4 text-white">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  className={`h-6 w-6 rounded-full bg-purple/90 p-4 hover:bg-purple`}
                  icon={faPlus}
                />
                <span className="text-purple">Buy</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  className={`h-6 w-6 rounded-full bg-purple/90 p-4 hover:bg-purple`}
                  icon={faMinus}
                />
                <span className="text-purple">Sell</span>
              </div>
              <div className="hidden flex-col items-center sm:flex">
                <FontAwesomeIcon
                  className={`h-6 w-6 rounded-full bg-purple/90 p-4 hover:bg-purple`}
                  icon={faLeftRight}
                />
                <span className="text-purple">Convert</span>
              </div>
            </div>
            <span className="mt-2 h-[70%] w-[1px] bg-grey"></span>
            <div className="flex gap-4 pl-4 text-purple">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  className={`h-6 w-6 rounded-full bg-purple/10 p-4 hover:bg-purple/20`}
                  icon={faArrowUp}
                />
                <span className="text-purple">Deposit</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  className={`h-6 w-6 rounded-full bg-purple/10 p-4 hover:bg-purple/20`}
                  icon={faArrowDown}
                />
                <span className="text-purple">Withdraw</span>
              </div>
            </div>
          </div>
        </div>
      </CustomCard>
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

Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
