import { Heading } from '@chakra-ui/core';
import React from 'react';
import NewSiteAlert from 'src/components/NewSiteAlert';
import Guide from 'src/components/Guide';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <NewSiteAlert />
    <Heading textAlign='center' mt={2}>
      Common steam games
    </Heading>
    <Guide />
  </Layout>
);

export default Index;
