import {
  Heading,
  Text,
  Link as ChakraLink,
  List,
  ListItem,
  Box,
} from '@chakra-ui/core';
import Head from 'next/head';
import React from 'react';
import Layout from 'src/components/Layout';

interface Props {}

const Developers: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <Head>
        <title>CSG | Developers</title>
        <meta
          name='Description'
          content='Common steam games is based on type-steamapi package, that is created for easier interactions with Steam Web API.'
        />
      </Head>
      <Heading>Developers</Heading>
      <Text mt={2}>
        If you are interested in creating app, that envolves interactions with
        Steam Web API, try out{' '}
        <ChakraLink
          color='blue.500'
          href='https://www.npmjs.com/package/type-steamapi'
          isExternal
        >
          <b>type-steamapi</b>
        </ChakraLink>{' '}
        package. It is available on NPM.
      </Text>
      <Heading as='h3' fontSize='22px' mt={2}>
        Why type-steamapi?
      </Heading>
      <Box mt={1}>
        <Text>
          It is an open-source package, that means that everyone can contribute
          to it and view{' '}
          <ChakraLink
            color='blue.500'
            isExternal
            href='https://github.com/tekkenthuuug/type-steamapi'
          >
            source code
          </ChakraLink>
        </Text>
        <Text mt={2}>Package also provides:</Text>
        <List style={{ listStyle: 'inside' }}>
          <ListItem>Typescript types right of the box</ListItem>
          <ListItem>Caching</ListItem>
          <ListItem>Partial Type-GraphQL support</ListItem>
        </List>
      </Box>
    </Layout>
  );
};

export default Developers;
