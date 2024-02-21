import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';

import StarComponent from './Explorer/Star';

export interface PeriodInterface {
  label: String;
}

interface Props {
  tableData: Array<any>;
  periods: PeriodInterface[];
}

const TableComponent = ({ tableData, periods }: Props) => {
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
    <div>
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

      <div className="flex h-8 w-full cursor-pointer items-center justify-between border-b border-solid border-custom-grey text-sm font-semibold leading-5 text-stone-400">
        <div className="flex h-8 w-64 justify-between">
          <div className="flex items-center space-x-4 pl-4">Asset</div>
        </div>
        <div className="flex flex-col items-end pr-4 md:hidden">Price</div>
        <div className="hidden h-full w-24 flex-col items-end justify-center md:flex">
          <p>Price</p>
        </div>
        <div className="hidden h-full w-32 flex-col items-end justify-center xl:flex">
          <p>Change (24H)</p>
        </div>
        <div className="hidden h-full w-24 flex-col items-start justify-center md:flex">
          <p>Market cap</p>
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
          <Link
            key={inx + 1}
            href={`/c/explore/${row.symbol}`}
            className="flex h-20 w-full items-center justify-between hover:bg-violet-50"
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
                <p className="select-none text-lg font-semibold text-indigo-800">
                  Buy
                </p>
              </div>
            </div>
            <div className="hidden w-9 md:flex">
              <div>
                <StarComponent isActive={row.isActive} />
              </div>
            </div>
          </Link>
        ))}

        {/**
         * Item 1 end
         */}
      </div>
    </div>
  );
};

export default TableComponent;
