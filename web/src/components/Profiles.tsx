import { Box, Divider, Heading, IconButton, Input } from '@chakra-ui/core';
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

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({ type: 'ADD_PROFILE' });
    },
    [dispatch]
  );

  const deleteProfile = useCallback(
    (url: string) => {
      dispatch({ type: 'DELETE_PROFILE', payload: url });
    },
    [dispatch]
  );

  return (
    <Box mt={4}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', alignItems: 'center' }}
      >
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
          type='submit'
        />
      </form>
      <Divider my={4} />
      {profiles.length ? (
        profiles.map(profileUrl => (
          <ProfileCard
            // profileUrl is unique. Not using index since it will cause rerender of every component if delete / add
            key={profileUrl}
            profileUrl={profileUrl}
            deleteProfile={deleteProfile}
          />
        ))
      ) : (
        <Box fontSize='22px' opacity={0.4} textAlign='center'>
          Go ahead and and your friends profiles :)
        </Box>
      )}
    </Box>
  );
};

export default Profiles;
