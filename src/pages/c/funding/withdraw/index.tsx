import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Tab, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import QRCode from 'react-qr-code';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';
import type { NextPageWithLayout } from '@/pages/_app';

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ');
}
const Deposit: NextPageWithLayout = () => {
  interface CategoryInterface {
    label: String;
  }

  const categories: CategoryInterface[] = [
    {
      label: 'Deposit',
    },
    {
      label: 'Withdraw',
    },
  ];

  interface PeriodInterface {
    label: String;
  }

  const periods: PeriodInterface[] = [{ label: 'Daily' }, { label: 'Monthly' }];

  return (
    <div className="mt-4 w-full max-w-[62rem] overflow-y-auto p-4">
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-4xl font-bold text-purple">Transfer</h1>
        </div>
        <div className="mb-1 flex h-20 flex-col justify-end overflow-x-auto pb-1 text-stone-600">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl">
              {categories.map((category, i) => (
                <Link key={i} href={`/c/funding/${['deposit', 'withdraw'][i]}`}>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        ' text-nowrap flex gap-2 items-center w-fit rounded-full py-2 text-md font-medium px-4',
                        'ring-white/60 focus:outline-none focus:ring-2',
                        !selected
                          ? 'bg-white text-black shadow'
                          : 'text-stone-600 hover:bg-white/[0.12] hover:text-black',
                      )
                    }
                  >
                    {category.label}
                  </Tab>
                </Link>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <CustomCard className="mt-4 flex flex-col gap-8 p-6 px-8">
              <div className="flex justify-between">
                <h2 className=" text-2xl font-medium">Withdraw</h2>
              </div>
              <div className="flex flex-col gap-8 text-stone-600">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="realtive border-1 inline-flex w-full rounded-md border px-4 py-2 text-sm font-medium  text-stone-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                      <div className="flex gap-4">
                        <Image
                          src="https://assets.kraken.com/marketing/web/icons/sym-btc_colored.svg"
                          alt="btc"
                          width={25}
                          height={25}
                        />
                        <div className="flex flex-col items-start justify-start">
                          <span className="text-md text-stone-700">
                            Bitcoin
                          </span>
                          <div className="flex flex-row gap-1 text-sm font-normal text-stone-500">
                            <span>0.0000000000</span>
                            <span>BTC available</span>
                          </div>
                        </div>
                      </div>
                      <ChevronDownIcon
                        className="absolute right-4 top-5 h-6 w-6 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-20 mt-4 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <Menu.Item>
                        <div className="border-1 flex items-center gap-2 rounded-full border p-2 shadow-sm">
                          <FontAwesomeIcon
                            className="text-stone-400"
                            icon={faSearch}
                          />
                          <input
                            type="text"
                            placeholder="Search"
                            className="w-full"
                          />
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-violet-500/20' : ''
                            } group flex w-full items-center justify-between rounded-md p-2 text-sm text-gray-900`}
                          >
                            <div className="flex gap-4">
                              <Image
                                src="https://assets.kraken.com/marketing/web/icons/sym-eth_colored.svg"
                                alt="btc"
                                width={25}
                                height={25}
                              />
                              <div className="flex flex-col items-start justify-start">
                                <span className="text-md text-stone-700">
                                  Ethereum
                                </span>
                                <span className="text-stone-400">ETH</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-start">
                              <span className="text-md text-stone-700">
                                0.00000 ETH
                              </span>
                              <span className="text-stone-400">CA$0.00</span>
                            </div>
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-violet-500/20' : ''
                            } group flex w-full items-center justify-between rounded-md p-2 text-sm text-gray-900`}
                          >
                            <div className="flex gap-4">
                              <Image
                                src="https://assets.kraken.com/marketing/web/icons/sym-sol_colored.svg"
                                alt="btc"
                                width={25}
                                height={25}
                              />
                              <div className="flex flex-col items-start justify-start">
                                <span className="text-md text-stone-700">
                                  Solana
                                </span>
                                <span className="text-stone-400">SOL</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-start">
                              <span className="text-md text-stone-700">
                                0.00000 SOL
                              </span>
                              <span className="text-stone-400">CA$0.00</span>
                            </div>
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-violet-500/20' : ''
                            } group flex w-full items-center justify-between rounded-md p-2 text-sm text-gray-900`}
                          >
                            <div className="flex gap-4">
                              <Image
                                src="https://assets.kraken.com/marketing/web/icons/sym-usdc_colored.svg"
                                alt="btc"
                                width={25}
                                height={25}
                              />
                              <div className="flex flex-col items-start justify-start">
                                <span className="text-md text-stone-700">
                                  USDC
                                </span>
                                <span className="text-stone-400">USDC</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-start">
                              <span className="text-md text-stone-700">
                                0.0000 USDC
                              </span>
                              <span className="text-stone-400">CA$0.00</span>
                            </div>
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="realtive border-1 inline-flex w-full rounded-md border px-4 py-2 text-sm font-medium  text-stone-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                      <div className="flex flex-col items-start justify-start">
                        <span className="text-md text-stone-700">Network</span>
                        <span>Bitcoin</span>
                      </div>
                      <ChevronDownIcon
                        className="absolute right-4 top-5 h-6 w-6 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-4 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white p-2 px-4 shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-violet-500/20' : ''
                            } group flex w-full items-center justify-start gap-2 rounded-md p-2 text-sm text-gray-900`}
                          >
                            <div className="h-4 w-4 text-black"></div>
                            Lightning
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-violet-500/20' : ''
                            } group flex w-full items-center justify-start gap-2 rounded-md p-2 text-sm text-gray-900`}
                          >
                            <div className="h-4 w-4 text-black">
                              <FontAwesomeIcon icon={faCheck} />
                            </div>
                            Bitcoin
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="border-1 rounded-md border border-rose-950 bg-yellow-100 p-2 px-3 text-sm">
                  Only deposit BTC from the Bitcoin network. Deposits of other
                  assets or from other networks will be lost.
                </div>
                <div className="border-1 relative flex flex-col rounded-lg border border-stone-500 bg-stone-100/50 px-2">
                  <div className="absolute right-2 top-3 text-purple">
                    <FontAwesomeIcon icon={faCopy} className=" h-6 w-6" />
                  </div>
                  <span>Deposit address</span>
                  <span className="font-semibold">3NasGKdd...LotpA</span>
                </div>
                <div className="flex w-full items-center justify-center">
                  <QRCode
                    size={256}
                    style={{ height: 'auto', maxWidth: '40%', width: '40%' }}
                    value={'3NasGKdd...LotpA'}
                    viewBox={`0 0 256 256`}
                    level="H"
                  />
                </div>
                <div className="flex flex-col gap-2 divide-y-2 text-xs font-normal text-stone-600">
                  <div className="flex justify-between">
                    <span>Address status</span>
                    <span>New address</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Minimum deposit</span>
                    <span>0.00010 BTC</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Deposit fee</span>
                    <span>0.00000 BTC</span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <ARoundedPurple
                  additionalClassName="p-2 w-full"
                  text="Copy deposit address"
                />
              </div>
            </CustomCard>
          </div>
          <div>
            <CustomCard className="mt-4 flex flex-col gap-4 p-6 px-8">
              <div className="flex justify-between">
                <h2 className=" text-2xl font-medium">BTC balances</h2>
              </div>
              <div className="flex flex-col gap-2 divide-y-2 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Total balance</span>
                  <span>0 BTC</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Order balance</span>
                  <span>0 BTC</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Available balance</span>
                  <span>0 BTC</span>
                </div>
              </div>
            </CustomCard>
            <CustomCard className="mt-4 flex flex-col gap-4 p-6 px-8">
              <div className="flex items-center justify-between">
                <h2 className=" text-2xl font-medium">Funding limits</h2>
                <div className="flex flex-col justify-end overflow-x-auto rounded-xl bg-slate-100 p-1 text-stone-600">
                  <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl">
                      {periods.map((period, i) => (
                        <Tab
                          key={i}
                          className={({ selected }) =>
                            classNames(
                              ' text-nowrap flex gap-2 items-center w-fit rounded-xl py-2 text-md font-medium px-4',
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
              <div className="flex flex-col gap-2 divide-y-8 divide-slate-300 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Daily deposits</span>
                  <span>$0.00 of Unlimited USD</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Daily deposit limit</span>
                  <span>Unlimited USD</span>
                </div>
              </div>
            </CustomCard>
            <CustomCard className="mt-4 flex flex-col gap-4 p-6 px-8">
              <div className="flex justify-between">
                <h2 className="  text-2xl font-medium">Recent transactions</h2>
              </div>
              <div className="mt-3">
                <ARoundedPurple
                  additionalClassName="p-2 !bg-violet-200 text-purple"
                  text="View all transactions"
                />
              </div>
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  );
};

Deposit.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Deposit;
