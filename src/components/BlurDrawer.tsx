import { Box, BoxProps } from '@chakra-ui/core';
import React from 'react';

interface Props {}

const BlurDrawer: React.FC<Props & BoxProps> = ({ children, ...boxProps }) => {
  return (
    <Box
      position='absolute'
      left={-5}
      top={-1}
      width='101%'
      height='101%'
      style={{ backdropFilter: 'blur(4px)' }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default BlurDrawer;
