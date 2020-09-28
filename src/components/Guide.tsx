import { Box, Button, List, ListItem, Text } from '@chakra-ui/core';
import React from 'react';
import BlurDrawer from './BlurDrawer';
import TodoItem from './TodoItem';

interface Props {}

const Todos: React.FC<Props> = ({}) => {
  return (
    <Box position='relative'>
      <BlurDrawer display='flex' justifyContent='center' pt={6}>
        <Button variantColor='green'>I'm new here</Button>
        <Button variantColor='blue' ml={4}>
          I've used this app before
        </Button>
      </BlurDrawer>
      <Text mt={4}>
        If it is your first time visiting this website, we recommend you to go
        through the guide below. After this you will be able to use this app
        intuitively and this message won't appear again.
      </Text>
      <List mt={2}>
        <ListItem>
          <TodoItem isDone>Add fields</TodoItem>
        </ListItem>
        <ListItem>
          <TodoItem>Paste your own and your friends steam IDs / URLs</TodoItem>
        </ListItem>
        <ListItem>
          <TodoItem>Click "Find common" and have fun!</TodoItem>
        </ListItem>
      </List>
    </Box>
  );
};

export default Todos;
