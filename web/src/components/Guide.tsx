import { Box, Button, List, ListItem, Text } from '@chakra-ui/core';
import React from 'react';
import { useGuide } from 'src/hooks/useGuide';
import TodoItem from './TodoItem';

interface Props {}

const Todos: React.FC<Props> = ({}) => {
  const { showGuide, completeGuide, unblur, blured, guideState } = useGuide()!;

  if (!showGuide) {
    return null;
  }

  return (
    <Box position='relative'>
      {blured && (
        <Box
          position='absolute'
          w='101%'
          h='101%'
          zIndex={10}
          display='flex'
          justifyContent='center'
          mt={10}
        >
          <Button variantColor='green' onClick={unblur}>
            I'm new here
          </Button>
          <Button variantColor='blue' ml={4} onClick={completeGuide}>
            I've used this app before
          </Button>
        </Box>
      )}
      <Box style={blured ? { filter: 'blur(4px)' } : undefined}>
        <Text mt={4}>
          If it is your first time visiting this website, we recommend you to go
          through the guide below. After this you will be able to use this app
          intuitively and this message won't appear again.
        </Text>
        <List mt={2}>
          {guideState.map(({ isDone, text, type }) => (
            <ListItem key={type}>
              <TodoItem isDone={isDone}>{text}</TodoItem>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Todos;
