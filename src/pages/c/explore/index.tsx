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
import StarComponent from '@/components/main/Explorer/Star';
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
      const response = await axios('/api/coin');
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

  interface PeriodInterface {
    label: String;
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

  function formatNumberToShortScale(number: number) {
    let divisor;
    let suffix;

    if (number >= 1e12) {
      divisor = 1e12;
      suffix = 'T'; // Trillions
    } else if (number >= 1e9) {
      divisor = 1e9;
      suffix = 'B'; // Billions
    } else if (number >= 1e6) {
      divisor = 1e6;
      suffix = 'M'; // Millions
    } else if (number >= 1e3) {
      divisor = 1e3;
      suffix = 'K'; // Thousands
    } else {
      return number.toString(); // Return the number as-is if it's less than 1000
    }

    const shortNumber = (number / divisor).toFixed(2) + suffix;
    return shortNumber;
  }

  function formatNumber(number: number) {
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function customRound(number: number) {
    const factor = 100;
    const rounded = Math.floor(number * factor) / factor; // Round down to 2 decimal places
    const remainder = (number * factor) % 1; // Get the fractional part of the number * 100

    // Check if the third decimal place is 5 or more, and adjust the result accordingly
    if (remainder >= 0.5) {
      return (Math.floor(number * factor) + 1) / factor;
    }
    return rounded;
  }

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
        <div className="mb-2 flex items-center justify-between">
          <div className="flex flex-col md:px-4 md:py-2">
            <span className="mb-1 text-xl font-medium leading-7">
              All cryptocurrencies
            </span>
            <span className="text-md leading-5 text-stone-600">
              {tableData.length} assets
            </span>
          </div>
          <div className=" hidden rounded-full bg-slate-100 p-2 xl:block">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl">
                {periods.map((period, i) => (
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
                    {period.label}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
        </div>

        <div className="flex h-20 w-full cursor-pointer items-center justify-between text-sm font-medium leading-5 hover:bg-violet-50">
          <div className="flex h-12 w-64 justify-between">
            <div className="flex items-center space-x-4 pl-4">Asset</div>
          </div>
          <div className="flex flex-col items-end pr-4 md:hidden">Price</div>
          <div className="hidden h-full w-24 flex-col items-end justify-center md:flex">
            <p className="text-lg text-stone-600">Price</p>
          </div>
          <div className="hidden h-full w-32 flex-col items-end justify-center xl:flex">
            <p className="text-lg">Change (24H)</p>
          </div>
          <div className="hidden h-full w-24 flex-col items-start justify-center md:flex">
            <p className="text-lg text-stone-600">Market cap</p>
          </div>
          <div className="hidden h-full w-20 flex-col items-center justify-center sm:flex"></div>
          <div className="hidden w-9 md:flex">
            <div></div>
          </div>
        </div>

        <div>
          {/**
           * Item 1
           */}
          {tableData.map((row, inx) => (
            <div
              key={inx + 1}
              className="flex h-20 w-full cursor-pointer items-center justify-between hover:bg-violet-50"
            >
              <div className="flex h-12 w-64 justify-between">
                <div className="flex items-center space-x-4 pl-4">
                  <img
                    src={row.image}
                    alt="icon"
                    className={`h-9 w-9 ${
                      row.symbol === 'btc' ? 'rotate-12' : ''
                    }`}
                  ></img>
                  <div className="h-full">
                    <p className="text-bold">{row.name}</p>
                    <p className="text-md text-stone-600">
                      {row.symbol.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end pr-4 md:hidden">
                <p className="text-stone-600">
                  ${formatNumber(row.current_price)}
                </p>
                <p
                  className={`text-lg ${
                    row.price_change_percentage_24h < 0
                      ? 'text-red-500'
                      : 'text-green'
                  }`}
                >
                  {customRound(row.price_change_percentage_24h)}%
                </p>
              </div>
              <div className="hidden h-full w-24 flex-col items-end justify-center md:flex">
                <p className="text-lg text-stone-600">
                  ${formatNumber(row.current_price)}
                </p>
              </div>
              <div className="hidden h-full w-32 flex-col items-end justify-center xl:flex">
                <p
                  className={`text-lg ${
                    row.price_change_percentage_24h < 0
                      ? 'text-red-500'
                      : 'text-green'
                  }`}
                >
                  {customRound(row.price_change_percentage_24h)}%
                </p>
              </div>
              <div className="hidden h-full w-24 flex-col items-start justify-center md:flex">
                <p className="text-lg text-stone-600">
                  ${formatNumberToShortScale(row.market_cap)}
                </p>
              </div>
              <div className="hidden h-full w-20 flex-col items-center justify-center sm:flex">
                <div className="rounded-full bg-violet-200 px-4 py-2 hover:bg-violet-300">
                  <p className="text-lg font-semibold text-indigo-800">Buy</p>
                </div>
              </div>
              <div className="hidden w-9 md:flex">
                <div>
                  <StarComponent isActive={row.isActive} />
                </div>
              </div>
            </div>
          ))}

          {/**
           * Item 1 end
           */}
        </div>
      </CustomCard>
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
