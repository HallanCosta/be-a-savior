import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonBig } from '../../../components/atoms/ButtonBig';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonLogout } from '../../../components/atoms/ButtonLogout';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Content
} from './styles';

export function Home(){
  const { navigate } = useNavigation();

  function handleNavigateToCreateIncident() {
    navigate('CreateIncident');
  }

  function handleNavigateToListIncident() {
    navigate('MyIncidents');
  }

  return (
    <Background gradient="ong">
      <Header 
        title="Raio de Sol"
        right={<ButtonLogout gradient="ong" />}
      />

      <Presentation
        title="Seja bem vindo!"
        subtitle={'Crie incidentes e comece\n já a ajudar.'}
      />
   
      <Content>
        <ButtonBig 
          title={'Criar\n Incidente'} 
          color={theme.colors.green}
          onPress={handleNavigateToCreateIncident}
        />

        <ButtonBig 
          title={'Meus\n Incidente'} 
          color={theme.colors.blue}
          onPress={handleNavigateToListIncident}
        />
      </Content>
    </Background>
  );
}