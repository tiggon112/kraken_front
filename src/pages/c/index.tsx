import {
  faArrowDown,
  faArrowUp,
  faLeftRight,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CustomCard } from '@/components/Card';
import Layout from '@/components/Layouts/Layout';
import { Percent } from '@/components/SVG/Percent';
import type { NextPageWithLayout } from '@/pages/_app';

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex w-full max-w-[62rem] flex-col gap-y-4 p-8">
      <h1 className="mb-6 text-4xl font-semibold text-purple">
        Good evening, Legas
      </h1>
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
              <div className="flex flex-col items-center">
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
        <div className="flex gap-x-4">
          <div className="flex h-fit w-fit rounded-full bg-custom-grey p-1">
            <Percent />
          </div>
        </div>
      </CustomCard>
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
