import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Portrait } from '../Portrait';

import {
  styles,
  Container,
  Title,
  Subtitle
} from './styles';

type Props = {
  title: string;
  subtitle: string;
  img: ImageSourcePropType;
}

export function ContentLanding({
  title,
  subtitle,
  img
}: Props) {
  return (
    <Container>
      <Portrait img={img} />

      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  );
}