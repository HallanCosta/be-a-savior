import React from 'react';

import {
  View
} from 'react-native';

import { 
  styles, 
  Container,
  Title,
  Subtitle
} from './styles';

type Props = { 
  title: string;
  subtitle: string;
}

export function Presentation({
  title,
  subtitle
}: Props){
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  );
}