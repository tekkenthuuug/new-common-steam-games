import { Box, Divider, IconButton, Input } from '@chakra-ui/core';
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

interface Props {}

const Profiles: React.FC<Props> = ({}) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <Box>
      <Box display='flex' alignItems='center' mt={4}>
        <Input
          placeholder='Profile URL / Steam ID'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
        />
        <IconButton
          aria-label='add profile'
          icon='add'
          isDisabled={!searchInput}
          variantColor='blue'
          ml={4}
        />
      </Box>
      <Divider my={4} />
      <ProfileCard />
      <ProfileCard />
    </Box>
  );
};

export default Profiles;
