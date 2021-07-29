import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { ButtonBig } from '../../../components/ButtonBig';
import { Presentation } from '../../../components/Presentation';
import { ButtonLogout } from '../../../components/ButtonLogout';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Content
} from './styles';

export function Home(){
  const { navigate } = useNavigation();

  function handleNavigateToListIncident() {
    navigate('ShowIncidents');
  }

  return (
    <Background gradient="donor">
      <Header 
        right={<ButtonLogout gradient="donor" />}
      />

      <Presentation
        title={'Olá Hállan. \nSeja bem vindo'}
        subtitle={'Ajude os incidentes sendo \num doador fiel.'}
      />
   
      <Content>
        
        {/* <ButtonBig 
          title="" 
          color=""
        />  */}

        <ButtonBig 
          title={'Listar\n Incidente'} 
          color={theme.colors.green}
          onPress={handleNavigateToListIncident}
        />
      </Content>
    </Background>
  );
}