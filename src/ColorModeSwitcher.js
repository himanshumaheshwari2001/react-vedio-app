import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
 
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
  
      variant="ghost"
      color="current"
      pos={'fixed'}
      zIndex={'overlay'}
      top={'4'}
      right={'4'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
