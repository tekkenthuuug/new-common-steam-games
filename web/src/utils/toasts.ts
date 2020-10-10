import { useToastOptions } from '@chakra-ui/core';

export const createCompletedGuideToast = (): useToastOptions => ({
  title: "Great, you've completed the guide!",
  variant: 'left-accent',
  status: 'success',
  position: 'bottom-left',
});

export const createProfileNotFoundToast = (
  displayName: string
): useToastOptions => ({
  title: 'Profile not found',
  description: `'${displayName}' was not found. Check spelling and try again.`,
  position: 'bottom-left',
  status: 'warning',
  isClosable: true,
  variant: 'left-accent',
  duration: 10000,
});

export const createHiddenProfileToast = (
  displayName: string
): useToastOptions => ({
  title: `'${displayName}' has a private profile`,
  description: `We can't access '${displayName}' game list`,
  position: 'bottom-left',
  status: 'warning',
  isClosable: true,
  variant: 'left-accent',
  duration: 10000,
});
