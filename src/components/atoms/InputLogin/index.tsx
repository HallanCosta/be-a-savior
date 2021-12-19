import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { ButtonShowPassword } from '../../atoms/ButtonShowPassword';

import { useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';

import {
  styles,
  Container
} from './styles';

export type Props = TextInputProps & {};

export function InputLogin({
  ...rest
}: Props) {

  const { owner } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  function handleToggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Container>
      <TextInput 
        {...rest} 
        style={[
          styles.input, 
          { borderColor: owner === 'ong' ? '#02004F' : '#4C4C4C' },
          { backgroundColor: owner === 'ong' ? theme.colors.ong.background100 : theme.colors.donor.background100 }
        ]}
        secureTextEntry={rest.secureTextEntry ? !showPassword : false}
      />

      { rest.secureTextEntry &&
        <ButtonShowPassword
          style={styles.buttonShowPassword}
          hasClicked={showPassword}
          onPress={() => handleToggleShowPassword()}
        />
      }
    </Container>
  );
}