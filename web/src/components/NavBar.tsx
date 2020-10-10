import {
  Box,
  Link as ChakraLink,
  List,
  ListItem,
  Image,
} from '@chakra-ui/core';
import React from 'react';
import Link from 'next/link';
import GitHubButton from 'react-next-github-btn';

interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  return (
    <Box as='nav' mb={3}>
      <List display='flex' alignItems='center'>
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
        <ListItem ml='auto' display='flex' alignItems='center'>
          <Box height={28}>
            <GitHubButton
              href='https://github.com/tekkenthuuug/new-common-steam-games'
              data-icon='octicon-star'
              data-size='large'
              data-show-count={true}
              aria-label='Star tekkenthuuug/new-common-steam-games on GitHub'
            >
              Star
            </GitHubButton>
          </Box>
          <ChakraLink
            href='https://github.com/tekkenthuuug/new-common-steam-games'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              ml={4}
              alt='github logo'
              src='/img/github-mark-32px.png'
              height={28}
            />
          </ChakraLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default NavBar;
