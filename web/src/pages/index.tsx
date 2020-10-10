import { Heading } from '@chakra-ui/core';
import React from 'react';
import Guide from 'src/components/Guide';
import GuideProvider from 'src/hooks/useGuide';
import Layout from 'src/components/Layout';
import Profiles from 'src/components/Profiles';
import { withApollo } from 'src/utils/withApollo';
import Head from 'next/head';

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>CSG | Home</title>
        <meta
          name='Description'
          content='CSG is the app that is used to find common steam games, so you and your friends could play together more!'
        />
      </Head>
      <GuideProvider>
        <Heading textAlign='center'>Common steam games</Heading>
        <Guide />
        <Profiles />
      </GuideProvider>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
