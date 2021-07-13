import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { 
  styles,
  Title
} from './styles';

type Props = RectButtonProps & {
  title: string;
  color: string;
}

export function Button({
  title,
  color,
  ...rest
}: Props){
  return (
    <RectButton
      style={[styles.container, { backgroundColor: color }]}
    >
      <Title>
        {title}
      </Title>
    </RectButton>
  );
}