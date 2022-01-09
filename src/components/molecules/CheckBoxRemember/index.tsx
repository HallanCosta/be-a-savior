import React, { useState } from 'react';
import { Checkbox,  } from 'react-native-paper';

import { useAuth } from '../../../hooks/auth';

import {
  styles,
  Container,
  Title
} from './styles';

export function CheckBoxRemember() {
  const { owner } = useAuth();

  const [isChecked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(!isChecked);
  }

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