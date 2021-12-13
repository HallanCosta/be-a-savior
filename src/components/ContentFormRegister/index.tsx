import React, { ReactElement, ReactNode } from 'react';

import { InputLogin, Props as InputLoginProps } from '../InputLogin';

import {
  styles,
  Container,
  Title
} from './styles';

type Props = { 
  title: string;
  firstInput: () => JSX.Element;
  secondInput: () => JSX.Element;
  thirdInput?: () => JSX.Element;
}

export function ContentFormRegister({
  title,
  firstInput: FirstInput,
  secondInput: SecondInput,
  thirdInput: ThirdInput = () => (<></>)
}: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <FirstInput />

      <SecondInput />      
      
      <ThirdInput />
      
    </Container>
  );
}