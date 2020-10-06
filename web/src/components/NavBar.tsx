import { Box, Link as ChakraLink, List, ListItem } from '@chakra-ui/core';
import React from 'react';
import Link from 'next/link';

interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  return (
    <Box as='nav' mb={3}>
      <List display='flex'>
        <ListItem>
          <Link href='/'>
            <ChakraLink>App</ChakraLink>
          </Link>
        </ListItem>
        <ListItem ml={4}>
          <Link href='/developers'>
            <ChakraLink>Developers</ChakraLink>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default NavBar;
