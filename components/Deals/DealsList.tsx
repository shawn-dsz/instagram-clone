import { Deal, getDeals } from '../../lib/data/deals';
import { Box, Heading, Skeleton, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';

const DealItem = ({ id, title, description }: Deal) => (
  <Box borderWidth="1px" rounded="lg" m={2} p={2}>
    <Link href="/deals/[id]" as={`/deals/${id}`}>
      <a>
        <Heading fontSize="xl">{title}</Heading>
      </a>
    </Link>
    <Text>{description}</Text>
  </Box>
);

const Loader = () => (
  <>
    <Skeleton height="20px" my="10px" />
    <Skeleton height="20px" my="10px" />
    <Skeleton height="20px" my="10px" />
    <Skeleton height="20px" my="10px" />
  </>
);

const DealsList = () => {
  const { status, data, error, isFetching } = useQuery('deals', getDeals);

  return (
    <>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <span>{error.message}</span>
      ) : (
        <Stack spacing={8}>
          {data.map((deal) => (
            <DealItem {...deal} key={deal.id} />
          ))}
        </Stack>
      )}
      <div>{isFetching ? 'Background Updating...' : ' '}</div>
    </>
  );
};

export default DealsList;
