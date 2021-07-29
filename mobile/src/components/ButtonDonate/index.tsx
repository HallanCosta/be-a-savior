import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { 
  styles,
  Container,
  Title
} from './styles';

export type Props = RectButtonProps & {
  title: string;
  color: 'green' | 'red' | 'blue' | 'darkblue';
  buttonDonatePrimary?: boolean;
}

export function ButtonDonate({
  title,
  color,
  buttonDonatePrimary,
  ...rest
}: Props){
  return (
    <Container
      buttonDonatePrimary={buttonDonatePrimary}  
      color={color}
    >
      <Title>
        {title}
      </Title>
    </Container>
  );
}