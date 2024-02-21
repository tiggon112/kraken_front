import { Tab } from '@headlessui/react';

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
      label: 'All',
    },
    {
      label: 'Watchlist',
    },
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
                  {category.label}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
        <CustomCard className="h-full p-4">hello</CustomCard>
      </div>
    </div>
  );
};

Deposit.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Deposit;
