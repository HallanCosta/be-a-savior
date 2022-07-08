import React, { ReactNode } from 'react';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
  styles,
  Container
} from './styles';

type Props = BorderlessButtonProps & {
  hasClicked?: boolean;
}

export function ButtonShowPassword({
  hasClicked = false,
  ...rest
}: Props) {
  return (
    <BorderlessButton
      {...rest}
    >
      <Container>
        {
          hasClicked
          ?
          <Feather 
            name="eye-off"
            size={20}
            color="#fff"
          />
          :
          <Feather 
            name="eye"
            size={20}
            color="#fff"
          />
        }        
      </Container>
    </BorderlessButton>
  );
}