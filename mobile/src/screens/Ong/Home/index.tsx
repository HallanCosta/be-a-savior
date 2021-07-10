import React from 'react';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { ButtonBig } from '../../../components/ButtonBig';
import { Presentation } from '../../../components/Presentation';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Content
} from './styles';

export function Home(){
  return (
    <Background color={theme.colors.primaryOng}>
      <Header />

      <Presentation
        title="Seja bem vindo!"
        subtitle={'Crie incidentes e comece\n já a ajudar.'}
      />
   
      <Content>
        <ButtonBig 
          title={'Criar\n Incidente'} 
          color={theme.colors.tertiaryOng}
        />

        <ButtonBig 
          title={'Meus\n Incidente'} 
          color={theme.colors.quaternaryOng}
        />
      </Content>
    </Background>
  );
}