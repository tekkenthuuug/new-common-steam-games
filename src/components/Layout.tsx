import { Box } from '@chakra-ui/core';
import React from 'react';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box maxWidth='800px' width='100%' mx='auto' py={3}>
      {children}
    </Box>
  );
};

export default Layout;
