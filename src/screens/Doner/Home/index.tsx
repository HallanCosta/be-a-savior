import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonBig } from '../../../components/atoms/ButtonBig';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonLogout } from '../../../components/atoms/ButtonLogout';

import { useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Content
} from './styles';

export function Home(){
  const { navigate } = useNavigation();

  const { signOut } = useAuth();

  function handleNavigateToListIncident() {
    navigate('ShowIncidents');
  }
  
  return (
    <Background gradient="donor">
      <Header 
        right={<ButtonLogout gradient="donor" onPress={signOut} />}
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