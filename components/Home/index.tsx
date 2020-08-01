import Layout, { siteTitle } from '../Layout';

import Head from 'next/head';

import DealsList from '../Deals/DealsList';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <DealsList />
    </Layout>
  );
};

export default Home;
