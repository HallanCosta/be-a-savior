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
  titleColor?: string;
}

export function Input({
  title,
  titleColor = '#ffffff',
  ...rest
}: Props){
  return (
    <Container>
      <Title color={titleColor}>
        {title}
      </Title>
      <TextInput 
        style={styles.input}
        {...rest}
      />
    </Container>
  );
}