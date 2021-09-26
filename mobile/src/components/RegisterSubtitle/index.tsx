import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  styles,
  Container,
  Subtitle,
  Title,
} from './styles';

type Props = RectButtonProps & {};

export function RegisterSubtitle({
  ...rest
}: Props) {
  return (
    <Container>
      <Subtitle>
        {'Não tem uma conta? '}
      </Subtitle>
      <RectButton
        {...rest}
      >
        <Title>
          Registre-se
        </Title>
      </RectButton>
    </Container>
  );
}