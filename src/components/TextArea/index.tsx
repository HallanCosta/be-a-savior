import React from 'react';

import {
  View,
  TextInput,
  TextInputProps
} from 'react-native';

import { 
  styles,
  Container,
  Title
} from './styles';

type Props = TextInputProps & {
  title: string;
}

export function TextArea({
  title,
  ...rest
}: Props){
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <TextInput 
        style={styles.input}
        {...rest}
      />
    </Container>
  );
}