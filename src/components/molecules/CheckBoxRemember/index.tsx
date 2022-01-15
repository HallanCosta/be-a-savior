import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';

import { useAuth } from '../../../hooks/auth';

import {
  styles,
  Container,
  Title
} from './styles';

type Props = {
  status: boolean;
  onPress: () => void;
}

export function CheckBoxRemember({ 
  status: isChecked, 
  onPress: handleCheck 
}: Props) {

  return (
    <Container>
      <Checkbox
        status={isChecked ? 'checked' : 'unchecked'}
        color="#FFFFFF"
        uncheckedColor="#FFFFFF"
        onPress={handleCheck}
      />

      <Title>
        Lembrar-me
      </Title>
    </Container>
  );
}