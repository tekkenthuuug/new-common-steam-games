import { Box, SimpleGrid, Spinner } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import AppCard from 'src/components/AppCard';
import Layout from 'src/components/Layout';
import { useSteamCommonAppsQuery } from 'src/generated/graphql';
import { withApollo } from 'src/utils/withApollo';
import Head from 'next/head';

interface Props {}

const Find: React.FC<Props> = () => {
  const router = useRouter();

  const urls = router.query.for as string;

  const { data, loading } = useSteamCommonAppsQuery({
    variables: {
      urls: urls?.split(','),
    },
  });

  let body = null;

  if (loading) {
    body = (
      <Box mt={6} w='100%' display='flex' justifyContent='center'>
        <Spinner size='lg' />
      </Box>
    );
  } else if (!data || !data.steamCommonApps) {
    body = (
      <Box>
        Can't access someonse games. Please, check if everyone has public games
        list
      </Box>
    );
  } else {
    body = (
      <SimpleGrid columns={[1, 2, 3]} spacing='10px' my={6}>
        {data.steamCommonApps.map(app => (
          <AppCard key={app.appId} app={app} />
        ))}
      </SimpleGrid>
    );
  }

  return (
    <Layout>
      <Head>
        <title>CSG | Common games</title>
      </Head>
      {body}
    </Layout>
  );
};

export default withApollo({ ssr: false })(Find);
