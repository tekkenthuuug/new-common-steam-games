import {
  Box,
  PseudoBox,
  Link as ChakraLink,
  PseudoBoxProps,
  Icon,
} from '@chakra-ui/core';
import React from 'react';
import { CommonAppFragment } from 'src/generated/graphql';
import CustomImg from './CustomImg';

interface Props {
  app: CommonAppFragment;
}

const AppCard: React.FC<Props> = ({ app }) => {
  const hoverButtonsStyles: PseudoBoxProps = {
    position: 'absolute',
    left: '-91%',
    backgroundColor: 'black',
    color: 'white',
    maxWidth: '90%',
    fontSize: '14px',
    fontWeight: 'bold',
    opacity: 0.9,
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    style: {
      transition: 'left 0.3s ease',
      textOverflow: 'ellipsis',
    },
    _groupHover: {
      left: 0,
    },
  };

  return (
    <Box
      w='100%'
      h='120px'
      as='article'
      overflow='hidden'
      position='relative'
      role='group'
    >
      <CustomImg
        src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${app.appId}/header.jpg`}
        w='100%'
        h='100%'
        objectFit='cover'
        position='absolute'
        zIndex={-1}
      />
      <ChakraLink
        href={`https://store.steampowered.com/app/${app.appId}/`}
        isExternal
      >
        <PseudoBox
          {...hoverButtonsStyles}
          padding={2}
          top={0}
          borderBottomRightRadius='12px'
        >
          {app.name}
        </PseudoBox>
      </ChakraLink>
      <ChakraLink href={`steam://run/${app.appId}`}>
        <PseudoBox
          {...hoverButtonsStyles}
          bottom={0}
          borderTopRightRadius='12px'
          w='32px'
          h='32px'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Icon name='triangle-up' transform='rotate(90deg)' fontSize='20px' />
        </PseudoBox>
      </ChakraLink>
    </Box>
  );
};

export default AppCard;
