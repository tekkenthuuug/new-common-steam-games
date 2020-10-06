import {
  Alert,
  AlertDescription,
  AlertIcon,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/core';
import React from 'react';

const NewSiteAlert = () => (
  <Alert status='warning'>
    <AlertIcon />
    <AlertDescription>
      This website is a newer version of{' '}
      <ChakraLink
        isExternal
        href='https://tekkenthuuug.github.io/common-steam-games/'
        target='__blank'
        rel='nooper norefer'
        color='blue.500'
      >
        Common Steam Games
        <Icon name='external-link' mb={1} ml={1} />
      </ChakraLink>
    </AlertDescription>
  </Alert>
);

export default NewSiteAlert;
