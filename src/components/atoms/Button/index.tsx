import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  styles,
  Container,
  Title
} from './styles';

export type Props = RectButtonProps & { 
  first?: boolean;
  color: string;
  title: string;
}

export function Button({
  first = false,
  color,
  title,
  ...rest
}: Props){
  return (
    <RectButton
      style={[
        styles.container, 
        { backgroundColor: color },
        first ? { marginRight: 50 } : {}
      ]}
      {...rest}
    >    
      <Title color={color}>
        {title}
      </Title>
    </RectButton>
  );
}