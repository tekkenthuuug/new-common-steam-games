import { Box, IconButton, Text, Image } from '@chakra-ui/core';
import React from 'react';

interface Props {
  profileUrl: string;
  deleteProfile?: (url: string) => void;
}

const ProfileCard: React.FC<Props> = ({ profileUrl, deleteProfile }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-around'
      mt={4}
      bg='gray.100'
      p={2}
      borderRadius={4}
      position='relative'
    >
      <Box>
        <Text fontSize='xl' color='blue.700' fontWeight='bold'>
          tekkenthuuug
        </Text>
        <Text fontSize='sm' color='gray.500'>
          Steam ID: 341241241231
        </Text>
        <Text fontSize='sm' color='gray.500'>
          Games owned: 126
        </Text>
      </Box>
      <Box>
        <Image
          borderRadius={6}
          boxShadow='lg'
          maxHeight={160}
          src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/74/749690d6cd9902b40e500040dcdbc7cd390d7baf_full.jpg'
        ></Image>
      </Box>
      {deleteProfile && (
        <IconButton
          position='absolute'
          top={2}
          right={2}
          icon='delete'
          variantColor='red'
          aria-label='delete profile from list'
          onClick={() => deleteProfile(profileUrl)}
        />
      )}
    </Box>
  );
};

export default React.memo(ProfileCard);
