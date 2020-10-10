import { Button, ButtonProps, Link as ChakraLink } from '@chakra-ui/core';
import React from 'react';
import { ProfileType } from 'src/reducers/profilesReducer';
import { useRouter } from 'next/router';
import { useGuide } from 'src/hooks/useGuide';

interface Props {
  profiles: ProfileType[];
}

const FindCGButton: React.FC<Props & ButtonProps> = ({
  profiles,
  children,
  ...otherProps
}) => {
  const { markTaskComplete } = useGuide()!;
  const router = useRouter();

  const handleClick = () => {
    const forParam = profiles.reduce((acc, profile) => {
      if (acc) {
        acc += ',';
      }
      acc += profile.for;

      return acc;
    }, '');

    markTaskComplete('CLICK_FIND');

    router.push(`/find?for=${encodeURIComponent(forParam)}`);
  };

  return (
    <Button
      onClick={handleClick}
      mt={4}
      variantColor='blue'
      width='100%'
      {...otherProps}
      as={ChakraLink}
    >
      {children}
    </Button>
  );
};

export default FindCGButton;
