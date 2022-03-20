import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  styles,
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
    <Content>
      <Image source={img} />
    </Content>
  );
}