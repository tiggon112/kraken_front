import Layout from '@/components/Layouts/Layout';

import type { NextPageWithLayout } from '../_app';

const Home: NextPageWithLayout = () => {
  return <p>joij</p>;
};

Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
