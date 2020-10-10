import {
  Box,
  IconButton,
  Text,
  Image,
  Spinner,
  useToast,
  Link as ChakraLink,
  PseudoBox,
} from '@chakra-ui/core';
import React, { useEffect } from 'react';
import { useSteamProfileSummaryQuery } from 'src/generated/graphql';
import { ProfileType } from 'src/reducers/profilesReducer';

interface Props {
  profileUrl: string;
  deleteProfile?: (url: string) => void;
  addProfile: (profile: ProfileType) => void;
}

const ProfileCard: React.FC<Props> = ({
  profileUrl,
  deleteProfile,
  addProfile,
}) => {
  const { loading, data } = useSteamProfileSummaryQuery({
    variables: { url: profileUrl },
  });

  const toast = useToast();

  let body = null;

  useEffect(() => {
    if (loading) return;

    if (!data || !data.steamProfileSummary) {
      toast({
        title: 'Profile not found',
        description: `'${profileUrl}' was not found. Check spelling and try again.`,
        position: 'bottom-left',
        status: 'warning',
        isClosable: true,
        variant: 'left-accent',
        duration: 10000,
      });
      if (deleteProfile) {
        deleteProfile(profileUrl);
      }

      return;
    }
    const { steamProfileSummary } = data;
    const { summary } = steamProfileSummary;

    if (summary.communityVisibilityState !== 3) {
      toast({
        title: `'${summary.personaName}' has a private profile`,
        description: `We can't access '${summary.personaName}' game list`,
        position: 'bottom-left',
        status: 'warning',
        isClosable: true,
        variant: 'left-accent',
        duration: 10000,
      });

      if (deleteProfile) {
        deleteProfile(profileUrl);
      }

      return;
    }

    addProfile({ ...steamProfileSummary, for: profileUrl } as ProfileType);
  }, [data]);

  if (loading) {
    body = (
      <Box width='100%' textAlign='center'>
        <Spinner size='lg' />;
      </Box>
    );
  } else if (data && data.steamProfileSummary) {
    const { steamProfileSummary } = data;
    const {
      avatar,
      personaName,
      profileUrl,
      personaState,
    } = steamProfileSummary.summary;
    const { steamId } = steamProfileSummary;

    body = (
      <>
        <Box ml='112px'>
          <ChakraLink href={profileUrl} isExternal>
            <Text fontSize='xl' color='blue.700' fontWeight='bold'>
              {personaName}
            </Text>
          </ChakraLink>
          <Text fontSize='sm' color='gray.500'>
            Steam ID: {steamId}
          </Text>
          <PseudoBox
            display='flex'
            alignItems='center'
            _before={{
              bg: personaState === 0 ? 'gray.500' : 'green.400',
              content: '""',
              height: 2,
              width: 2,
              borderRadius: '50%',
              display: 'block',
            }}
          >
            <Text
              fontSize='sm'
              color={personaState === 0 ? 'gray.500' : 'green.400'}
              fontWeight='bold'
              ml={1}
            >
              {personaState === 0 ? 'Offline' : 'Online'}
            </Text>
          </PseudoBox>
        </Box>
        <Box ml='auto' mr='112px'>
          <Image
            borderRadius={6}
            boxShadow='lg'
            maxHeight={160}
            src={avatar.full}
          />
        </Box>
      </>
    );
  }

  return (
    <Box
      display='flex'
      alignItems='center'
      mt={4}
      bg='gray.100'
      p={2}
      borderRadius={4}
      position='relative'
      height='176px'
    >
      {body}
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
