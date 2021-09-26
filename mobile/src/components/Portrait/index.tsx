import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  styles,
  Container,
  Content,
  Image
} from './styles';

type Props = { 
  img: ImageSourcePropType;
}

export function Portrait({
  img
}: Props){
  return (
    <Container>
      <Content>
        <Image source={img} />
      </Content>
    </Container>
  );
}