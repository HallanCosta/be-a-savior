import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { ButtonLogout } from '../../atoms/ButtonLogout';

import { 
  styles,
  Container,
  SpaceBlank,
  Title
} from './styles';

type Props = {
  left?: ReactNode;
  title?: string;
  right?: ReactNode;
}

export function Header({
  title,
  left,
  right
}: Props){

  return (
    <Container>
      { left
        ?
        left
        :
        <SpaceBlank />
      }

      { title 
        ?
        <Title>
          {title}
        </Title>
        :
        <Title />
      }

      { right 
        ?
        right
        :
        <SpaceBlank />
      }
    </Container>
  );
}