import { Box, Divider, IconButton, Input } from '@chakra-ui/core';
import React, { useCallback, useReducer } from 'react';
import { useGuide } from 'src/hooks/useGuide';
import profilesReducer, {
  profilesReducerInitial,
  ProfileType,
} from 'src/reducers/profilesReducer';
import FindCGButton from './FindCGButton';
import ProfileCard from './ProfileCard';

interface Props {}

const Profiles: React.FC<Props> = ({}) => {
  const [
    { searchInput, profileUrls, isLoading, profiles },
    dispatch,
  ] = useReducer(profilesReducer, profilesReducerInitial);

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
      if (profileUrls.length >= 1) {
        markTaskComplete('ADD_TWO');
      }
      dispatch({ type: 'ADD_PROFILE_URL' });
      markTaskComplete('CLICK_PLUS');
    },
    [dispatch, profileUrls]
  );

  const deleteProfile = useCallback(
    (url: string) => {
      dispatch({ type: 'DELETE_PROFILE', payload: url });
    },
    [dispatch]
  );

  const addProfile = useCallback((profile: ProfileType) => {
    dispatch({ type: 'ADD_PROFILE', payload: profile });
  }, []);

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
          isDisabled={!searchInput || profileUrls.includes(searchInput)}
          variantColor='blue'
          ml={4}
          type='submit'
        />
      </form>
      {profileUrls.length >= 2 && (
        <FindCGButton isLoading={isLoading} profiles={profiles}>
          Find common
        </FindCGButton>
      )}
      <Divider my={4} />
      {profileUrls.length ? (
        profileUrls.map(profileUrl => (
          <ProfileCard
            // profileUrl is unique. Not using index since it will cause rerender of every component if delete / add
            key={profileUrl}
            profileUrl={profileUrl}
            deleteProfile={deleteProfile}
            addProfile={addProfile}
          />
        ))
      ) : (
        <Box fontSize='22px' opacity={0.4} textAlign='center'>
          Go ahead and and your friends profiles above
        </Box>
      )}
    </Box>
  );
};

export default Profiles;
