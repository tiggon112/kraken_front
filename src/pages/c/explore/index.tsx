import { faCircleDot, faStar } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faAward,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab } from '@headlessui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';
import type { PeriodInterface } from '@/components/main/Table';
import TableComponent from '@/components/main/Table';
import type { NextPageWithLayout } from '@/pages/_app';

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ');
}

interface TableDataType {
  [key: string]: any;
}

const Home: NextPageWithLayout = () => {
  const [tableData, setTableData] = useState<Array<TableDataType>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('/api/coin?count=30');
      setTableData(
        response.data.data.map((row: any) => ({ isActive: false, ...row })),
      );
    };

    fetchData();
  }, []);

  interface CategoryInterface {
    label: String;
    icon: any;
  }

  const categories: CategoryInterface[] = [
    {
      label: 'All',
      icon: faCoins,
    },
    {
      label: 'Watchlist',
      icon: faStar,
    },
    {
      label: 'Gainers',
      icon: faArrowTrendUp,
    },
    {
      label: 'Losers',
      icon: faArrowTrendDown,
    },
    {
      label: 'StableCoins',
      icon: faCircleDot,
    },
    {
      label: 'Newly listed',
      icon: faAward,
    },
  ];

  const periods: PeriodInterface[] = [
    { label: '24H' },
    { label: '1W' },
    { label: '1M' },
    { label: '1Y' },
  ];

  return (
    <div className="flex w-full max-w-[62rem] flex-col gap-y-4 p-8">
      <h1 className="mb-6 text-4xl font-semibold text-purple">Explore</h1>
      <div className=" flex h-20 flex-col justify-end overflow-x-auto pb-1 text-stone-600">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl">
            {categories.map((category, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    ' text-nowrap flex gap-2 items-center w-fit rounded-full py-2 text-md font-medium px-4',
                    'ring-white/60 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-black shadow'
                      : 'text-stone-600 hover:bg-white/[0.12] hover:text-black',
                  )
                }
              >
                <FontAwesomeIcon icon={category.icon} />
                {category.label}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
      <CustomCard className="h-full p-4">
        <TableComponent
          title="All cryptocurrencies"
          tableData={tableData}
          periods={periods}
        />
      </CustomCard>
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
