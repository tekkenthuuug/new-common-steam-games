import { Box, Divider, IconButton, Input } from '@chakra-ui/core';
import { FragmentsOnCompositeTypesRule } from 'graphql';
import React, { useCallback, useReducer } from 'react';
import { useGuide } from 'src/hooks/useGuide';
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

  const { markTaskComplete } = useGuide()!;

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_SEARCH', payload: e.target.value });
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (profiles.length >= 1) {
        markTaskComplete('ADD_TWO');
      }
      dispatch({ type: 'ADD_PROFILE' });
      markTaskComplete('CLICK_PLUS');
    },
    [dispatch, profiles]
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
          onFocus={() => markTaskComplete('TYPE_URL')}
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
