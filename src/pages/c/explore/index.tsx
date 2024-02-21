import { faCircleDot, faStar } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faAward,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab } from '@headlessui/react';
import { useEffect } from 'react';

import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';
import type { NextPageWithLayout } from '@/pages/_app';

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ');
}

const Home: NextPageWithLayout = () => {
  // const [_tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log('here');
      // const response = await axios('/api/coin/all');
      // setTableData(response.data.data);
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

  return (
    <div className="w-full max-w-[62rem] overflow-y-auto p-4">
      <div className="flex h-full flex-col gap-y-4">
        <div className="flex flex-wrap justify-between">
          <h1 className="mb-6 text-4xl font-semibold text-purple">Explore</h1>
        </div>
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
          <div className="mb-6 flex items-center justify-between">
            <div className="flex flex-col md:px-4 md:py-2">
              <span className="mb-1 text-xl font-medium leading-7">
                All cryptocurrencies
              </span>
              <span className="text-md leading-5 text-stone-600">
                243 assets
              </span>
            </div>
            <div className=" rounded-full bg-slate-100 p-2">
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

          <div>
            {/**
             * Item 1
             */}
            <div className="flex h-20 w-full cursor-pointer items-center justify-between hover:bg-violet-100">
              <div className="flex h-12 justify-between md:w-40 xl:w-64">
                <div className="flex items-center space-x-4 pl-4">
                  <img
                    src="https://assets.kraken.com/marketing/web/icons/sym-btc_colored.svg?e=www.kraken.com"
                    alt="icon"
                    className="h-9 w-9 rotate-12"
                  ></img>
                  <div className="h-full">
                    <p className="text-bold">Ren</p>
                    <p className="text-md text-stone-600">REN</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end pr-4 md:hidden">
                <p className="text-stone-600">${'0.06'}</p>
                <p className="text-red-500">{'-0.62'}%</p>
              </div>
              <div className="hidden h-full w-24 flex-col items-end justify-center md:flex">
                <p className="text-lg text-stone-600">${'51,787.00'}</p>
              </div>
              <div className="hidden h-full w-32 flex-col items-end justify-center xl:flex">
                <p className="text-lg text-red-500">{'-1.36'}%</p>
              </div>
              <div className="hidden h-full w-24 flex-col items-start justify-center md:flex">
                <p className="text-lg text-stone-600">${'1.02T'}</p>
              </div>
              <div className="hidden h-full w-20 flex-col items-center justify-center sm:flex">
                <div className="rounded-full bg-violet-200 px-4 py-2">
                  <p className="text-lg font-semibold text-indigo-800">Buy</p>
                </div>
              </div>
              <div className="hidden w-9 md:flex">
                <img
                  src="https://assets.kraken.com/marketing/web/icons/sym-btc_colored.svg?e=www.kraken.com"
                  alt="icon"
                  className="h-6 w-6"
                ></img>
              </div>
            </div>
            {/**
             * Item 1 end
             */}
          </div>
        </CustomCard>
      </div>
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
