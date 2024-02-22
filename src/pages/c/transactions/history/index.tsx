import { faCheck, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Tab, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { Fragment } from 'react';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';
import Datepick from '@/components/Transactions/Datepick';
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
      label: 'History',
    },
    {
      label: 'Scheduled',
    },
  ];

  return (
    <div className="mt-4 w-full max-w-[62rem] overflow-y-auto p-4">
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-4xl font-bold text-purple">Transactions</h1>
        </div>
        <div className="flex h-20 flex-col justify-end overflow-x-auto pb-1 text-stone-600">
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
                  {category.label}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
        <div className="">
          <CustomCard className="mt-4 flex flex-col gap-6 p-6 px-8">
            <div className="flex items-center justify-between">
              <h2 className=" text-2xl font-medium">Transactions</h2>
              <button className="flex items-center gap-2 rounded-full bg-stone-200 px-4 py-2 hover:bg-stone-300">
                <FontAwesomeIcon className="text-stone-600" icon={faDownload} />
                Export
              </button>
            </div>
            <div className="flex gap-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="realtive border-1 inline-flex w-full gap-2 rounded-md bg-stone-100 px-4 py-2 text-sm font-medium text-stone-500  hover:bg-stone-200 hover:text-stone-800  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    <span>Assets</span>
                    <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
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
                  <Menu.Items className="absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500/20' : ''
                          } group flex w-full items-center justify-start gap-2 rounded-md p-2 text-sm text-gray-900`}
                        >
                          BTC
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
                          ETH
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="realtive border-1 inline-flex w-full gap-2 rounded-md bg-stone-100 px-4 py-2 text-sm font-medium text-stone-500  hover:bg-stone-200 hover:text-stone-800  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    <span>Types</span>
                    <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
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
              <Datepick label="Start Date" />
              <Datepick label="End Date" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/assets/images/empty-transaction.webp"
                height={200}
                width={200}
                alt="no data"
              />
              <div className="flex flex-col items-center gap-2">
                <h5 className=" text-xl font-medium">
                  Your crypto journey starts now
                </h5>
                <span className="text-stone-500">
                  We couldn&apos;t find any transactions for this account. New
                  activity will appear here.
                </span>
              </div>
              <ARoundedPurple
                additionalClassName="p-2 w-fit !bg-violet-200 text-purple"
                text="Buy Crypto"
              />
            </div>
          </CustomCard>
        </div>
      </div>
    </div>
  );
};

Deposit.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Deposit;
