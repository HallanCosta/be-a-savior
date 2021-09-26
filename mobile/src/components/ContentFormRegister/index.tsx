import React from 'react';

import { InputLogin } from '../InputLogin';

import {
  styles,
  Container,
  Title
} from './styles';

type Props = { 
  title: string;
  firstInput: string;
  secondInput: string;
  thirdInput?: string;
}

export function ContentFormRegister({
  title,
  firstInput,
  secondInput,
  thirdInput
}: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <InputLogin
        placeholder={firstInput}
        placeholderTextColor="#FFFFFF"
      />
      
      <InputLogin
        placeholder={secondInput}
        placeholderTextColor="#FFFFFF"
      />

      { thirdInput &&
        <InputLogin
          placeholder={thirdInput}
          placeholderTextColor="#FFFFFF"
        />
      }
    </Container>
  );
}