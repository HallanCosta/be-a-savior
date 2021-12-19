import React, { useState } from 'react';
import { Checkbox,  } from 'react-native-paper';

import {
  styles,
  Container,
  Title
} from './styles';

export function CheckBoxRemember() {
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