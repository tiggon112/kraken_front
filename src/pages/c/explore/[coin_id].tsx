import {
  faArrowDown,
  faArrowUp,
  faLeftRight,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab } from '@headlessui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Area,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';
import { formatNumber } from '@/utils/Stringfy';

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ');
}
const CoinExplorer = () => {
  const router = useRouter();

  const [coinData, setCoinData] = useState<any>({});
  const [data, setData] = useState([]);

  interface CategoryInterface {
    label: String;
  }

  const categories: CategoryInterface[] = [
    {
      label: '24H',
    },
    {
      label: '1W',
    },
    {
      label: '1M',
    },
    {
      label: '1Y',
    },
    {
      label: 'All',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`/api/coin/${router.query.coin_id}`);
      await setCoinData(response.data.data[0]);

      await axios
        .get(
          'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=50&aggregate=3&e=Kraken',
        )
        .then((res) => {
          setData(res.data.Data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (router.isReady) fetchData();
  }, [router]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}`}</p>
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-[46rem] pt-10">
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
        <div className="flex flex-col gap-4 px-4">
          <CustomCard className="w-full px-8 py-6">
            <div className="flex flex-col">
              <p>Price</p>
              <div className="flex items-baseline">
                <span className="text-4xl leading-12 text-darkgrey">$</span>
                <span className="text-4xl font-medium leading-12">
                  {coinData.current_price
                    ? formatNumber(coinData?.current_price)
                    : ''}
                </span>
                <span className="ml-2 font-medium text-green">
                  +$
                  {coinData.current_price
                    ? formatNumber(
                        (coinData.price_change_percentage_30d_in_currency *
                          coinData.current_price) /
                          (coinData.price_change_percentage_30d_in_currency +
                            100),
                      )
                    : ''}
                </span>
                <span className="ml-2 font-medium text-green">
                  (+
                  {coinData.current_price
                    ? formatNumber(
                        coinData.price_change_percentage_30d_in_currency,
                      )
                    : ''}
                  %)
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                data={data}
                margin={{ top: 25, right: 0, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#129a74" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <Tooltip content={<CustomTooltip />} />

                <Line
                  type="monotone"
                  unit=""
                  strokeLinecap="round"
                  strokeWidth={2}
                  dataKey="close"
                  stroke="#006991"
                  dot={false}
                  legendType="none"
                />
                <Area
                  type="monotone"
                  dataKey="close"
                  stroke={false}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="flex justify-between px-2">
              {['MAR 2023', 'MAY 2023', 'AUG 2023', 'NOV 2023', 'FEB2024'].map(
                (item, i) => {
                  return (
                    <span key={i} className="text-xs text-stone-400">
                      {item}
                    </span>
                  );
                },
              )}
            </div>
            <div className=" flex justify-center p-4">
              <Tab.Group className="flex flex-row justify-end overflow-x-auto bg-stone-100 p-2 text-stone-600">
                <Tab.List className="flex space-x-1 rounded-full">
                  {categories.map((category, i) => (
                    <Tab
                      key={i}
                      className={({ selected }) =>
                        classNames(
                          ' text-nowrap flex gap-2 items-center w-fit rounded-full py-2 text-sm font-medium px-4',
                          'ring-white/60 focus:outline-none focus:ring-2',
                          selected
                            ? 'bg-white text-black shadow'
                            : 'text-stone-400 hover:bg-white/[0.12] hover:text-black',
                        )
                      }
                    >
                      {category.label}
                    </Tab>
                  ))}
                </Tab.List>
              </Tab.Group>
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
          </CustomCard>
          <CustomCard className="w-full px-8 py-6">
            <div>About Bitcoin</div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-stone-400">Market cap</span>
                <span>#1.01T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-stone-400">Volume (24h)</span>
                <span>#23.97B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-stone-400">Popularity</span>
                <span>#1</span>
              </div>
            </div>
            <div className="pt-8 ">
              <span className="text-sm text-stone-400">
                Bitcoin is the world's largest cryptocurrency project. The
                bitcoin (BTC) cryptocurrency was the first of its kind to be
                built on blockchain technology.
              </span>
            </div>
          </CustomCard>
          <CustomCard className="w-full px-8 py-6">
            <div>
              <span className="text-sm text-stone-400">Total balance</span>
            </div>
            <div>
              <span className="text-xl font-normal">$0.00</span>
            </div>
            <div>
              <span className="text-sm text-stone-400">0.00000 BTC</span>
            </div>
          </CustomCard>
          <CustomCard className="w-full px-8 py-6">
            <div>
              <span className="text-xl font-normal">Recurring orders</span>
            </div>
            <div className="py-4">
              <span className="text-sm text-stone-400">
                Buy, sell, or convert crypto at daily, weekly or monthly
                intervals.
              </span>
            </div>
            <div>
              <ARoundedPurple
                className="w-fit !bg-violet-100 p-2 font-medium text-purple hover:!bg-violet-200"
                text="New recurring order"
              />
            </div>
          </CustomCard>
          <CustomCard className="w-full px-8 py-6">
            <div>
              <span className="text-xl font-normal">Transactions</span>
            </div>
            <div className="py-4">
              <span className="text-sm text-stone-400"></span>
            </div>
            <div>
              <ARoundedPurple
                className="w-fit !bg-violet-100 p-2 font-medium text-purple hover:!bg-violet-200"
                text="View all transactions"
              />
            </div>
          </CustomCard>
        </div>
      </div>
    </div>
  );
};

CoinExplorer.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default CoinExplorer;
