import { Box } from '@chakra-ui/core';
import React from 'react';
import NavBar from './NavBar';

interface Props { }

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box maxWidth='800px' width='95%' mx='auto'>
      <Box as='header' my={3}>
        <NavBar />
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
