import Layout from '../../components/Layout';

import Head from 'next/head';

import { getDeal, Deal as Props } from '../../lib/data/deals';

import { Heading, Text, Stack } from '@chakra-ui/core';

export default function Deal({ title, description }: Props) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <Stack>
        <Heading as="h2" size="md">
          {title}
        </Heading>

        <Text fontSize="md">{description}</Text>
      </Stack>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const deal = await getDeal(params.id as string);

  return {
    props: deal,
  };
}
