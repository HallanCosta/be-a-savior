import React from 'react';
import { Feather } from '@expo/vector-icons';

import { ButtonLogout } from '../ButtonLogout';

import { 
  styles,
  Container,
  Title
} from './styles';

export function Header(){
  return (
    <Container>
      <Feather 
        name="arrow-left"
        size={25}
        color="#fff"
      />

      <Title>
        Raio de Sol
      </Title>


      <ButtonLogout 
        color="#030848"
      >
        <Feather 
          name="power"
          size={20}
          color="#fff"
        />
      </ButtonLogout>
    </Container>
  );
}