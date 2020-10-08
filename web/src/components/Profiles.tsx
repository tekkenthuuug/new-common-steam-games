import { Box, Divider, IconButton, Input } from '@chakra-ui/core';
import React, { useCallback, useReducer } from 'react';
import profilesReducer, {
  profilesReducerInitial,
} from 'src/reducers/profilesReducer';
import ProfileCard from './ProfileCard';

interface Props {}

const Profiles: React.FC<Props> = ({}) => {
  const [{ searchInput, profiles }, dispatch] = useReducer(
    profilesReducer,
    profilesReducerInitial
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_SEARCH', payload: e.target.value });
    },
    [dispatch]
  );

  const handleAddClick = useCallback(() => {
    dispatch({ type: 'ADD_PROFILE' });
  }, [dispatch]);

  const deleteProfile = useCallback(
    (url: string) => {
      dispatch({ type: 'DELETE_PROFILE', payload: url });
    },
    [dispatch]
  );

  return (
    <Box>
      <Box display='flex' alignItems='center' mt={4}>
        <Input
          placeholder='Profile URL / Steam ID'
          value={searchInput}
          onChange={handleInputChange}
        />
        <IconButton
          aria-label='add profile'
          icon='add'
          isDisabled={!searchInput || profiles.includes(searchInput)}
          variantColor='blue'
          ml={4}
          onClick={handleAddClick}
        />
      </Box>
      <Divider my={4} />
      {profiles &&
        profiles.map(profileUrl => (
          <ProfileCard
            // profileUrl is unique. Not using index since it will cause rerender of every component if delete / add
            key={profileUrl}
            profileUrl={profileUrl}
            deleteProfile={deleteProfile}
          />
        ))}
    </Box>
  );
};

export default Profiles;
