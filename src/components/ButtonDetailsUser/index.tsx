import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { 
  styles,
  Container
} from './styles';

export function ButtonDetailsUser({
  ...rest
}: RectButtonProps){
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <Feather 
        name="user"
        size={24}
        color="#000"
      />
    </RectButton>
  );
}