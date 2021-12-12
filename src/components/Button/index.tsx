import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  styles,
  Container,
  Title
} from './styles';

export type Props = RectButtonProps & { 
  color: string;
  title: string;
}

export function Button({
  color,
  title,
  ...rest
}: Props){
  return (
    <RectButton
      style={[styles.container, { backgroundColor: color }]}
      {...rest}
    >    
      {/* <Container color={color}> */}
        <Title color={color}>
          {title}
        </Title>
      {/* </Container> */}
    </RectButton>
  );
}