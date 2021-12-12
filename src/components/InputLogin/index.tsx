import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { ButtonShowPassword } from '../ButtonShowPassword';

import {
  styles,
  Container
} from './styles';

type Props = TextInputProps & {};

export function InputLogin({
  ...rest
}: Props) {

  const [showPassoword, setShowPassword] = useState(false);

  function handleToggleShowPassword() {
    setShowPassword(!showPassoword);
  }

  return (
    <Container>
      <TextInput 
        {...rest} 
        style={styles.input}
        secureTextEntry={!showPassoword}
      />

      { rest.secureTextEntry &&
        <ButtonShowPassword
          style={styles.buttonShowPassword}
          hasClicked={showPassoword}
          onPress={handleToggleShowPassword}
        />
      }
    </Container>
  );
}