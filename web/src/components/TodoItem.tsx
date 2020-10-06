import { Icon, Box, IconProps, Text, BoxProps } from '@chakra-ui/core';
import React from 'react';

interface Props {
  isDone?: boolean;
}

const TodoItem: React.FC<Props> = ({ children, isDone = false }) => {
  const iconProps: IconProps = isDone
    ? {
        color: 'blue.500',
      }
    : {
        color: 'gray.300',
      };
  const textProps: BoxProps = isDone
    ? {
        textDecoration: 'line-through',
        color: 'black.500',
      }
    : {
        textDecoration: 'none',
      };

  return (
    <Box display='flex' alignItems='center' fontSize='lg'>
      <Icon name='check-circle' {...iconProps} />
      <Text ml={2} {...textProps}>
        {children}
      </Text>
    </Box>
  );
};

export default TodoItem;
