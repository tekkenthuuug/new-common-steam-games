import { Heading } from '@chakra-ui/core';
import React from 'react';
import Guide from 'src/components/Guide';
import GuideProvider from 'src/hooks/useGuideState';
import Layout from 'src/components/Layout';
import Profiles from 'src/components/Profiles';
import { withApollo } from 'src/utils/withApollo';

const Index = () => {
  return (
    <Layout>
      <GuideProvider>
        <Heading textAlign='center'>Common steam games</Heading>
        <Guide />
        <Profiles />
      </GuideProvider>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
