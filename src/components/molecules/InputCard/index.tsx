import React from 'react';

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

export function InputCard({
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